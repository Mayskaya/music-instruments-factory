using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	public class ApplicationDbContext : DbContext
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

		public DbSet<User> Users { get; set; }

		public DbSet<Address> Addresses { get; set; }

		public DbSet<Country> Countries { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseLazyLoadingProxies();
			string dbAddress = Environment.GetEnvironmentVariable("MICRM_DB_ADDRESS");
			optionsBuilder.UseNpgsql($"Host={dbAddress};Database=micrm_db;Username=admin;Password=admin;Port=5432");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Good>().ToTable("good");
			modelBuilder.Entity<GoodType>().ToTable("goodtype");
			modelBuilder.Entity<GoodInOffer>().ToTable("goodinoffer");
			modelBuilder.Entity<Factory>().ToTable("factory");
			modelBuilder.Entity<Offer>().ToTable("offer");
			modelBuilder.Entity<SupplyInStore>().ToTable("supplyinstore");
			modelBuilder.Entity<Store>().ToTable("store");
			modelBuilder.Entity<Buyer>().ToTable("buyer");
			modelBuilder.Entity<Staff>().ToTable("staff");
			modelBuilder.Entity<Delivery>().ToTable("delivery");
			modelBuilder.Entity<Car>().ToTable("car");
			modelBuilder.Entity<Mark>().ToTable("mark");
			modelBuilder.Entity<Model>().ToTable("model");
			modelBuilder.Entity<User>().ToTable("crmuser");
			modelBuilder.Entity<Address>().ToTable("address");
			modelBuilder.Entity<Country>().ToTable("country");
		}
	}
}