using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public interface IGoodRepository: IRepository<Good, int>
	{

	}

	public interface IGoodTypeRepository : IRepository<GoodTypeRepository, int>
	{

	}

	public interface IGoodInOfferRepository : IRepository<GoodInOfferRepository, int>
	{

	}

	public interface IFactoryRepository : IRepository<Domain.Factory, int>
	{

	}

	public interface IOfferRepository : IRepository<OfferRepository, int>
	{

	}

	public interface ISupplyInStoreRepository : IRepository<SupplyInStoreRepository, int>
	{

	}

	public interface IStoreRepository : IRepository<Store, int>
	{

	}

	public interface IBuyerRepository : IRepository<Buyer, int>
	{

	}

	public interface IStaffRepository : IRepository<Staff, int>
	{

	}

	public interface IDeliveryRepository : IRepository<Delivery, int>
	{

	}

	public interface ICarRepository : IRepository<Car, int>
	{

	}

	public interface IMarkRepository : IRepository<Mark, int>
	{

	}

	public interface IModelRepository : IRepository<Model, int>
	{

	}

	public interface IUserRepository : IRepository<User, int>
	{

	}

	public interface IAddressRepository : IRepository<Address, int>
	{

	}

	public interface ICountryRepository : IRepository<Country, int>
	{

	}
}
