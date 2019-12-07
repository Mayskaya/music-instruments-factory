using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Services
{
	public interface ISummaryService
	{
		Task<string> GenerateOfferSummaryAsync();
		
		string FileExtension { get; }
	}
}