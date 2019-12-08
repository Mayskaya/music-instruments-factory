using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Services;

namespace MusicInstrumentsCrm.Controllers
{
	[Route("api/v1/summary")]
	[AllowAnonymous]
	public class SummaryController: Controller
	{
		private readonly ISummaryService summaryService;

		public SummaryController(ISummaryService summaryService)
		{
			this.summaryService = summaryService;
		}

		[HttpGet]
		public async Task<IActionResult> SendSummary()
		{
			string fullFilePath = await summaryService.GenerateOfferSummaryAsync();
			Stream fileStream = new FileStream(fullFilePath, FileMode.Open);
			return File(fileStream, "application/octet-stream", 
					Path.GetFileName(fullFilePath));
		}
	}
}