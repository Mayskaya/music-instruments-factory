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
//			modelBuilder.Entity<Good>().ToTable("Good");
//			modelBuilder.Entity<GoodType>().ToTable("GoodType");
//			modelBuilder.Entity<GoodInOffer>().ToTable("GoodInOffer");
//			modelBuilder.Entity<Factory>().ToTable("Factory");
//			modelBuilder.Entity<Offer>().ToTable("Offer");
//			modelBuilder.Entity<SupplyInStore>().ToTable("SupplyInStore");
//			modelBuilder.Entity<Store>().ToTable("Store");
//			modelBuilder.Entity<Buyer>().ToTable("Buyer");
//			modelBuilder.Entity<Staff>().ToTable("Staff");
//			modelBuilder.Entity<Delivery>().ToTable("Delivery");
//			modelBuilder.Entity<Car>().ToTable("Car");
//			modelBuilder.Entity<Mark>().ToTable("Mark");
//			modelBuilder.Entity<Model>().ToTable("Model");
//			modelBuilder.Entity<User>().ToTable("CrmUser");
//			modelBuilder.Entity<Address>().ToTable("Address");
//			modelBuilder.Entity<Country>().ToTable("Country");
		}
	}
}