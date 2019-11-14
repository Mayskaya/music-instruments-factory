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

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
		{

		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseNpgsql("Host=my_host;Database=micrm_db;Username=admin;Password=admin");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Good>().ToTable("Good");
			modelBuilder.Entity<GoodType>().ToTable("GoodType");
			modelBuilder.Entity<GoodInOffer>().ToTable("GoodInOffer");
			modelBuilder.Entity<Factory>().ToTable("Factory");
			modelBuilder.Entity<Offer>().ToTable("Offer");
			modelBuilder.Entity<SupplyInStore>().ToTable("SupplyInStore");
			modelBuilder.Entity<Store>().ToTable("Store");
			modelBuilder.Entity<Buyer>().ToTable("Buyer");
			modelBuilder.Entity<Staff>().ToTable("Staff");
			modelBuilder.Entity<Delivery>().ToTable("Delivery");
			modelBuilder.Entity<Car>().ToTable("Car");
			modelBuilder.Entity<Mark>().ToTable("Mark");
			modelBuilder.Entity<Model>().ToTable("Model");
			modelBuilder.Entity<User>().ToTable("User");
			modelBuilder.Entity<Address>().ToTable("Address");
			modelBuilder.Entity<Country>().ToTable("Country");
		}
	}
}
