using System;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Domain.Transfer;
using MusicInstrumentsCrm.Repositories;
using MusicInstrumentsCrm.Services;

namespace MusicInstrumentsCrm
{
	public class Startup
	{
		private readonly SeedData seedData;

		private readonly string SpecificOrigins = "_specificOrigins";

		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
			seedData = new SeedData();
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

			services.AddDbContext<ApplicationDbContext>(
				options =>
				{
					var dbAddress = Environment.GetEnvironmentVariable("MICRM_DB_ADDRESS");
					options.UseNpgsql(
							$"Host={dbAddress ?? "192.168.99.100"};Database=micrm_db;Username=admin;Password=admin;Port=5432")
						.UseLazyLoadingProxies();
				});

			services.AddDefaultIdentity<User>()
				.AddRoles<IdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>();

			services.AddIdentityServer()
				.AddApiAuthorization<User, ApplicationDbContext>();

			services.AddAuthentication()
				.AddIdentityServerJwt();

			services.Configure<IdentityOptions>(options =>
			{
				options.Password.RequireDigit = false;
				options.Password.RequireLowercase = true;
				options.Password.RequireUppercase = false;
				options.Password.RequiredLength = 3;
				options.Password.RequiredUniqueChars = 1;
				options.Password.RequireNonAlphanumeric = false;

				// Lockout settings.
				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
				options.Lockout.MaxFailedAccessAttempts = 5;
				options.Lockout.AllowedForNewUsers = true;

				// User settings.
				options.User.AllowedUserNameCharacters =
					"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
				options.User.RequireUniqueEmail = false;
			});

			services.ConfigureApplicationCookie(options =>
			{
				// Cookie settings
				options.Cookie.HttpOnly = true;
				options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

				options.LoginPath = "/Identity/Account/Login";
				options.AccessDeniedPath = "/Identity/Account/AccessDenied";
				options.SlidingExpiration = true;
			});

			services.AddControllersWithViews();
			services.AddRazorPages();

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

			services.AddScoped<ISummaryService, CsvSummaryService>();
			services.AddScoped<IConverter<OfferDto, Offer>, OfferConverter>();

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
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
		{
			UpdateDatabase(app);

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				app.UseHsts();
			}

			string shouldInitDb = Environment.GetEnvironmentVariable("SHOULD_INIT_DB");
			if (shouldInitDb != null && shouldInitDb.Equals("true"))
			{
				seedData.Initialize(serviceProvider).Wait();
			}

//			seedData.InitializeDistribution(serviceProvider).Wait();
			app.UseCors(SpecificOrigins);

			app.UseRouting();
			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
				endpoints.MapRazorPages();
			});
			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseSpaStaticFiles();

			app.UseAuthentication();
			app.UseIdentityServer();

			app.UseSpa(spa =>
			{
				if (env.IsDevelopment())
				{
					spa.Options.SourcePath = "ClientApp/build";
					spa.UseReactDevelopmentServer(npmScript: "start");
				}
			});
		}

		private void UpdateDatabase(IApplicationBuilder app)
		{
			using (var serviceScope = app.ApplicationServices
				.GetRequiredService<IServiceScopeFactory>()
				.CreateScope())
			{
				using (var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>())
				{
					context.Database.Migrate();
				}
			}
		}
	}
}