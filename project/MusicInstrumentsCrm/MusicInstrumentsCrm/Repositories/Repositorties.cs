using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public interface IGoodRepository: IAsyncRepository<Good, int>
	{

	}

	public interface IGoodTypeRepository : IAsyncRepository<GoodType, int>
	{

	}

	public interface IGoodInOfferRepository : IAsyncRepository<GoodInOffer, int>
	{

	}

	public interface IFactoryRepository : IAsyncRepository<Factory, int>
	{

	}

	public interface IOfferRepository : IAsyncRepository<Offer, int>
	{

	}

	public interface ISupplyInStoreRepository : IAsyncRepository<SupplyInStore, int>
	{

	}

	public interface IStoreRepository : IAsyncRepository<Store, int>
	{

	}

	public interface IBuyerRepository : IAsyncRepository<Buyer, int>
	{

	}

	public interface IStaffRepository : IAsyncRepository<Staff, int>
	{

	}

	public interface IDeliveryRepository : IAsyncRepository<Delivery, int>
	{

	}

	public interface ICarRepository : IAsyncRepository<Car, int>
	{

	}

	public interface IMarkRepository : IAsyncRepository<Mark, int>
	{

	}

	public interface IModelRepository : IAsyncRepository<Model, int>
	{

	}

	public interface IUserRepository : IAsyncRepository<User, int>
	{

	}

	public interface IAddressRepository : IAsyncRepository<Address, int>
	{

	}

	public interface ICountryRepository : IAsyncRepository<Country, int>
	{

	}

	public interface IRoleRepository : IAsyncRepository<Role, int>
	{
		
	}
}
