using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.EntityFramework.Entities;
using IdentityServer4.EntityFramework.Interfaces;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;

namespace MusicInstrumentsCrm.Domain
{
	public class ApplicationDbContext : ApiAuthorizationDbContext<User>
	{
		public class Tables
		{
			public static string Address => "Address";

			public static string Buyer => "Buyer";

			public static string Car => "Car";

			public static string Country => "Country";

			public static string Delivery => "Delivery";

			public static string Factory => "Factory";

			public static string Good => "Good";

			public static string GoodInOffer => "GoodInOffer";

			public static string GoodType => "GoodType";

			public static string Mark => "Mark";

			public static string Model => "Model";

			public static string Offer => "Offer";

			public static string Staff => "Staff";

			public static string Store => "Store";

			public static string SupplyInStore => "SupplyInStore";

			public static string User => "AspNetUserRoles";
		}

		public DbSet<Good> Goods { get; set; }

		public DbSet<GoodType> GoodTypes { get; set; }

		public DbSet<GoodInOffer> GoodsInOffers { get; set; }

		public DbSet<Factory> Factories { get; set; }

		public DbSet<Offer> Offers { get; set; }

		public DbSet<SupplyInStore> SuppliesInStore { get; set; }

		public DbSet<Store> Stores { get; set; }

		public DbSet<Buyer> Buyers { get; set; }

		public DbSet<Staff> Staffs { get; set; }

		public DbSet<Delivery> Deliveries { get; set; }

		public DbSet<Car> Cars { get; set; }

		public DbSet<Mark> Marks { get; set; }

		public DbSet<Model> Models { get; set; }

		public DbSet<User> MyUsers { get; set; }

		public DbSet<Address> Addresses { get; set; }

		public DbSet<Country> Countries { get; set; }

		public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
			: base(options, operationalStoreOptions)
		{
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
		}
	}
}