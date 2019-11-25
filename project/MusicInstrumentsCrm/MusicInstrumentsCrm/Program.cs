using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;

namespace MusicInstrumentsCrm
{
	public class Program
	{
		public static void Main(string[] args)
		{
			CreateWebHostBuilder(args).Build().Run();
		}

		public static IWebHostBuilder CreateWebHostBuilder(string[] args)
		{
			return WebHost.CreateDefaultBuilder(args)
				.UseStartup<Startup>()
				.ConfigureLogging(logging =>
				{
					logging.ClearProviders();
					logging.AddConsole();
					logging.AddFilter("Microsoft", LogLevel.Information);
					logging.AddFilter("Microsoft.EntityFrameworkCore", LogLevel.Debug);
					logging.AddFilter("System", LogLevel.Debug);
					logging.AddFilter("MusicInstrumentsCrm.Program", LogLevel.Debug);
				});
		}
	}
}