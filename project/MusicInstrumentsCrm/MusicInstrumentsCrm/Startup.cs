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

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			
			services.AddScoped<IGoodRepository, GoodRepository>();
			services.AddScoped<IGoodTypeRepository, GoodTypeRepository>();
			services.AddScoped<IGoodInOfferRepository, GoodInOfferRepository>();
			services.AddScoped<IFactoryRepository, FactoryRepository>();
			services.AddScoped<IOfferRepository, OfferRepository>();
			services.AddScoped<ISupplyInStoreRepository, SupplyInStoreRepository>();
			services.AddScoped<IStoreRepository, StoreRepository>();
			services.AddScoped<IBuyerRepository, BuyerRepository>();
			services.AddScoped<IStaffRepository, StaffRepository>();
			services.AddScoped<IDeliveryRepository, DeliveryRepository>();
			services.AddScoped<ICarRepository, CarRepository>();
			services.AddScoped<IMarkRepository, MarkRepository>();
			services.AddScoped<IModelRepository, ModelRepository>();
			services.AddScoped<IUserRepository, UserRepository>();
			services.AddScoped<IAddressRepository, AddressRepository>();
			services.AddScoped<ICountryRepository, CountryRepository>();


			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

			services.AddDbContext<ApplicationDbContext>(options=>
			{
				options.UseNpgsql(Configuration.GetConnectionString("ApplicationDbContext"));
			});

			// In production, the React files will be served from this directory
			services.AddSpaStaticFiles(configuration =>
			{
				configuration.RootPath = "ClientApp/build";
			});
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
