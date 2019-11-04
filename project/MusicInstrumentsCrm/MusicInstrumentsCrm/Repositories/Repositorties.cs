using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	interface IGoodRepository: IRepository<Good, int>
	{

	}

	interface IGoodTypeRepository: IRepository<GoodTypeRepository, int>
	{

	}

	interface IGoodInOfferRepository : IRepository<GoodInOfferRepository, int>
	{

	}

	interface IFactoryRepository : IRepository<Domain.Factory, int>
	{

	}

	interface IOfferRepository : IRepository<OfferRepository, int>
	{

	}

	interface ISupplyInStoreRepository : IRepository<SupplyInStoreRepository, int>
	{

	}

	interface IStoreRepository : IRepository<Store, int>
	{

	}

	interface IBuyerRepository : IRepository<Buyer, int>
	{

	}

	interface IStaffRepository : IRepository<Staff, int>
	{

	}

	interface IDeliveryRepository : IRepository<Delivery, int>
	{

	}


	interface ICarRepository : IRepository<Car, int>
	{

	}

	interface IMarkRepository : IRepository<Mark, int>
	{

	}

	interface IModelRepository : IRepository<Model, int>
	{

	}

	interface IUserRepository : IRepository<User, int>
	{

	}

	interface IAddressRepository : IRepository<Address, int>
	{

	}

	interface ICountryRepository : IRepository<Country, int>
	{

	}
}
