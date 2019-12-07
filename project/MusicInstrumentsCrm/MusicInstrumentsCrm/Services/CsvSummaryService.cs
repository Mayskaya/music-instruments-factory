using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Domain.Transfer;

namespace MusicInstrumentsCrm.Services
{
	public class CsvSummaryService : ISummaryService
	{
		private static readonly string OutputDirectory = "summaries";

		public string FileExtension { get; } = ".csv";

		private readonly ApplicationDbContext context;

		private readonly IConverter<OfferDto, Offer> converter;

		public CsvSummaryService(ApplicationDbContext dbContext, IConverter<OfferDto, Offer> offerConverter)
		{
			context = dbContext;
			converter = offerConverter;
		}

		public async Task<string> GenerateOfferSummaryAsync()
		{
			var offers = context.Offers.ToList();
			var dtoObjects = offers.Select(x => converter.ToDto(x));
			
			var filePath = $"offer_summary_{DateTime.Now:yy-MM-dd_HHmm}{FileExtension}";
			if (!Directory.Exists(OutputDirectory)) Directory.CreateDirectory(OutputDirectory);

			using (var writer = new StreamWriter(Path.Join(OutputDirectory, filePath)))
			using (var csv = new CsvWriter(writer))
			{
				csv.Configuration.RegisterClassMap<OfferDtoMap>();
				csv.Configuration.HasHeaderRecord = true;
				csv.Configuration.SanitizeForInjection = true;
				csv.Configuration.Delimiter = ";";
				csv.WriteRecords(dtoObjects);
			}

			return Path.Join(OutputDirectory, filePath);
		}

	}
}