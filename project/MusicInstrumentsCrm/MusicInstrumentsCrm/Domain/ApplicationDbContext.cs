using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace MusicInstrumentsCrm.Domain
{
	public class ApplicationDbContext : ApiAuthorizationDbContext<User>
	{
		public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
			: base(options, operationalStoreOptions)
		{
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

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
		}
	}
}