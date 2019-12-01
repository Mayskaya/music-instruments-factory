using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Repositories;

namespace MusicInstrumentsCrm
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		private readonly string SpecificOrigins = "_specificOrigins";

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

			services.AddDbContext<ApplicationDbContext>(options =>
			{
				options.UseNpgsql(Configuration.GetConnectionString("ApplicationDbContext"));
			}, ServiceLifetime.Singleton);

			services.AddSingleton<IGoodRepository, GoodRepository>();
			services.AddSingleton<IGoodTypeRepository, GoodTypeRepository>();
			services.AddSingleton<IGoodInOfferRepository, GoodInOfferRepository>();
			services.AddSingleton<IFactoryRepository, FactoryRepository>();
			services.AddSingleton<IOfferRepository, OfferRepository>();
			services.AddSingleton<ISupplyInStoreRepository, SupplyInStoreRepository>();
			services.AddSingleton<IStoreRepository, StoreRepository>();
			services.AddSingleton<IBuyerRepository, BuyerRepository>();
			services.AddSingleton<IStaffRepository, StaffRepository>();
			services.AddSingleton<IDeliveryRepository, DeliveryRepository>();
			services.AddSingleton<ICarRepository, CarRepository>();
			services.AddSingleton<IMarkRepository, MarkRepository>();
			services.AddSingleton<IModelRepository, ModelRepository>();
			services.AddSingleton<IUserRepository, UserRepository>();
			services.AddSingleton<IAddressRepository, AddressRepository>();
			services.AddSingleton<ICountryRepository, CountryRepository>();

			services.AddCors(options =>
			{
				options.AddPolicy(SpecificOrigins,
					builder =>
					{
						builder
							.AllowAnyHeader()
							.AllowAnyMethod()
							.AllowAnyOrigin();
					});
			});

			// In production, the React files will be served from this directory
			services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/build"; });
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				app.UseHsts();
			}

			app.UseCors(SpecificOrigins);

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseSpaStaticFiles();

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller}/{action=Index}/{id?}");
			});

			app.UseSpa(spa =>
			{
				spa.Options.SourcePath = "ClientApp";

				if (env.IsDevelopment())
				{
					spa.UseReactDevelopmentServer(npmScript: "start");
				}
			});
		}
	}
}