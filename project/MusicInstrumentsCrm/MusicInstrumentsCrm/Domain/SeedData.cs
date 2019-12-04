using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace MusicInstrumentsCrm.Domain
{
	public class SeedData
	{
		private PasswordHasher<User> hasher = new PasswordHasher<User>();

		private IDictionary<string, string> users = new Dictionary<string, string>();

		private ApplicationDbContext applicationDbContext;

		public async Task Initialize(IServiceProvider serviceProvider)
		{
			RoleManager<IdentityRole> roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
			UserManager<User> userManager = serviceProvider.GetRequiredService<UserManager<User>>();

			await InitializeUserAsync(userManager);
			await InitializeRolesAsync(roleManager);
			applicationDbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();
			applicationDbContext.Database.EnsureCreated();
			Log.Information("Seeding address");
			if (!applicationDbContext.Addresses.Any())
			{
				applicationDbContext.Addresses.Add(new Address {Id = 1, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 2, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 3, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 4, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 5, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 6, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 7, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 8, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 9, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 10, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 11, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 12, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 13, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 14, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 15, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 16, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 17, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 18, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 19, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 20, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 21, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 22, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 23, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 24, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 25, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 26, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 27, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 28, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 29, FullAddress = "",});
				applicationDbContext.Addresses.Add(new Address {Id = 30, FullAddress = "",});
				applicationDbContext.SaveChanges();
			}

			Log.Information("Seeding countries");
			if (!applicationDbContext.Countries.Any())
			{
				applicationDbContext.Countries.Add(new Country {Id = 1, Name = "Россия"});
				applicationDbContext.Countries.Add(new Country {Id = 2, Name = "США"});
				applicationDbContext.Countries.Add(new Country {Id = 3, Name = "Тайвань"});
				applicationDbContext.Countries.Add(new Country {Id = 4, Name = "Япония"});
				applicationDbContext.Countries.Add(new Country {Id = 5, Name = "Китай"});
				applicationDbContext.Countries.Add(new Country {Id = 6, Name = "Германия"});
				applicationDbContext.Countries.Add(new Country {Id = 7, Name = "Канада"});
				applicationDbContext.Countries.Add(new Country {Id = 8, Name = "Вьетнам"});
				applicationDbContext.Countries.Add(new Country {Id = 9, Name = "Франция"});
				applicationDbContext.Countries.Add(new Country {Id = 10, Name = "Англия"});
				applicationDbContext.Countries.Add(new Country {Id = 11, Name = "Казахстан"});
				applicationDbContext.SaveChanges();
			}

			Log.Information("Seeding GoodTypes");
			if (!applicationDbContext.GoodTypes.Any())
			{
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 1, TypeName = "Гитара"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 2, TypeName = "Тромбон"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 3, TypeName = "Рояль"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 4, TypeName = "Пианино"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 5, TypeName = "Электрогитара"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 6, TypeName = "Бас"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 7, TypeName = "Аккордеон"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 8, TypeName = "Скрипка"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 9, TypeName = "Виолончель"});
				applicationDbContext.GoodTypes.Add(new GoodType {Id = 10, TypeName = "Баян"});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Factories.Any())
			{
				applicationDbContext.Factories.Add(new Factory
					{Id = 1, Name = "Gibson", AddressId = 1, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 2, Name = "Fender", AddressId = 2, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 3, Name = "Jackson", AddressId = 3, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 4, Name = "HOHNER", AddressId = 4, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 5, Name = "Stradivari", AddressId = 5, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 6, Name = "Casio", AddressId = 6, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 7, Name = "MusicMan", AddressId = 7, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.Factories.Add(new Factory
					{Id = 8, Name = "ESP", AddressId = 8, FoundationDate = DateTime.UnixEpoch});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Stores.Any())
			{
				applicationDbContext.Stores.Add(new Store
					{Id = 1, Name = "Музыкант Дисконт", AddressId = 11, FoundationDate = DateTime.Now});
				applicationDbContext.Stores.Add(new Store
					{Id = 2, Name = "Музыкант на Пресне", AddressId = 12, FoundationDate = DateTime.Now});
				applicationDbContext.Stores.Add(new Store
					{Id = 3, Name = "Музыкант на Невском", AddressId = 13, FoundationDate = DateTime.Now});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Buyers.Any())
			{
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 1, FirstName = "Артем", LastName = "Мотозов", Patronymic = "Владимирович",
					Email = "motozov.a.v@gmail.com", Phone = "+79853338076", UserId = users["amotozov"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 2, FirstName = "Алина", LastName = "Федотова", Patronymic = "Александровна",
					Email = "fedotova.a.a@gmail.com", Phone = "+78005553535", UserId = users["afedotova"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 3, FirstName = "Ярослав", LastName = "Аваков", Patronymic = "Игоревич",
					Email = "avakov.y.i@gmail.com", Phone = "+79203338077", UserId = users["yavakov"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 4, FirstName = "Алексей", LastName = "Козлов", Patronymic = "Михайлович",
					Email = "kozlov.a.m@gmail.com", Phone = "+79203438976", UserId = users["akozlov"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 5, FirstName = "Екатерина", LastName = "Зеленцова", Patronymic = "Викторовна",
					Email = "zelentsova.e.v@gmail.com", Phone = "+79163333676", UserId = users["ezelentsova"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 6, FirstName = "Яна", LastName = "Климова", Patronymic = "Вячеславовна",
					Email = "klimova.y.v@gmail.com", Phone = "+79033898026", UserId = users["yklimova"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 7, FirstName = "Анна", LastName = "Скузоваткина", Patronymic = "Александровна",
					Email = "skuzovatkina.a.a@gmail.com", Phone = "+79855558076", UserId = users["askuzovatkina"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 8, FirstName = "Сергей", LastName = "Бердов", Patronymic = "Владимирович",
					Email = "berdov.s.v@gmail.com", Phone = "+79889338076", UserId = users["sberdov"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 9, FirstName = "Игорь", LastName = "Бутов", Patronymic = "Игоревич",
					Email = "butov.i.i@gmail.com", Phone = "+7936638076", UserId = users["ibutov"]
				});
				applicationDbContext.Buyers.Add(new Buyer
				{
					Id = 10, FirstName = "Павел", LastName = "Романов", Patronymic = "Сергеевич",
					Email = "romanov.p.s@gmail.com", Phone = "+74953331212", UserId = users["promanov"]
				});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Staffs.Any())
			{
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 1, FirstName = "Борис", LastName = "Белов", Patronymic = "Борисович", PassportSerial = "4510",
					PassportNumber = "229201", Inn = "1000000000", Phone = "+79853338076", Snils = "100-000-000 00",
					UserId = users["bbelov"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 2, FirstName = "Владислав", LastName = "Петров", Patronymic = "Маратович",
					PassportSerial = "4511", PassportNumber = "567131", Inn = "1000000001", Phone = "+79853338077",
					Snils = "100-000-000 01", UserId = users["vpetrov"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 3, FirstName = "Роман", LastName = "Архипов", Patronymic = "Романович",
					PassportSerial = "4512", PassportNumber = "832170", Inn = "1000000002", Phone = "+79853338078",
					Snils = "100-000-000 02", UserId = users["rarkhipov"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 4, FirstName = "Михаил", LastName = "Мещера", Patronymic = "Георгеевич",
					PassportSerial = "4513", PassportNumber = "749411", Inn = "1000000003", Phone = "+79853338079",
					Snils = "100-000-000 03", UserId = users["mmeschera"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 5, FirstName = "Евгений", LastName = "Писаренко", Patronymic = "Евгеньевич",
					PassportSerial = "4514", PassportNumber = "951570", Inn = "1000000004", Phone = "+79853338080",
					Snils = "100-000-000 04", UserId = users["episarenko"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 6, FirstName = "Мария", LastName = "Барабанова", Patronymic = "Михайловна",
					PassportSerial = "4520", PassportNumber = "570951", Inn = "1000000005", Phone = "+79853338081",
					Snils = "100-000-000 05", UserId = users["mbarabanova"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 7, FirstName = "Анастасия", LastName = "Гольцева", Patronymic = "Александровна",
					PassportSerial = "4412", PassportNumber = "411749", Inn = "1000000006", Phone = "+79853338082",
					Snils = "100-000-000 06", UserId = users["agolceva"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 8, FirstName = "Антон", LastName = "Хаперский", Patronymic = "Игоревич",
					PassportSerial = "4235", PassportNumber = "170832", Inn = "1000000007", Phone = "+79853338083",
					Snils = "100-000-000 07", UserId = users["ahapersky"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 9, FirstName = "Стив", LastName = "Гибсон", Patronymic = "Моралес", PassportSerial = "4956",
					PassportNumber = "131567", Inn = "1000000008", Phone = "+79853338084", Snils = "100-000-000 08",
					UserId = users["sgibson"]
				});
				applicationDbContext.Staffs.Add(new Staff
				{
					Id = 10, FirstName = "Админ", LastName = "Админов", Patronymic = "Админович",
					PassportSerial = "4568", PassportNumber = "201229", Inn = "2000000000", Phone = "+79853338085",
					Snils = "100-000-000 09", UserId = users["admin"]
				});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Marks.Any())
			{
				applicationDbContext.Marks.Add(new Mark {Id = 1, Name = "Hyundai", CountryId = 1});
				applicationDbContext.Marks.Add(new Mark {Id = 2, Name = "Skoda", CountryId = 2});
				applicationDbContext.Marks.Add(new Mark {Id = 3, Name = "IVECO", CountryId = 3});
				applicationDbContext.Marks.Add(new Mark {Id = 4, Name = "Bom", CountryId = 4});
				applicationDbContext.Marks.Add(new Mark {Id = 5, Name = "GAZ", CountryId = 5});
				applicationDbContext.Marks.Add(new Mark {Id = 6, Name = "Lada", CountryId = 6});
				applicationDbContext.Marks.Add(new Mark {Id = 7, Name = "Honda", CountryId = 7});
				applicationDbContext.Marks.Add(new Mark {Id = 8, Name = "Renault", CountryId = 8});
				applicationDbContext.Marks.Add(new Mark {Id = 9, Name = "KIA", CountryId = 9});
				applicationDbContext.Marks.Add(new Mark {Id = 10, Name = "Ford", CountryId = 10});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Goods.Any())
			{
				applicationDbContext.Goods.Add(new Good
				{
					Id = 1, Name = "Fender Drednaut", Description = "Гитара Fender", GoodTypeId = 1, FactoryId = 1,
					Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 2, Name = "Gibson Les Paul", Description = "Электрогитара Gibson Les Paul", GoodTypeId = 5,
					FactoryId = 2, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 3, Name = "Jackson Blue Ocean", Description = "Электрогитара Jackson Blue Ocean",
					GoodTypeId = 5, FactoryId = 3, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 4, Name = "HOHNER CL-001", Description = "Классическая гитара HOHNER CL-001", GoodTypeId = 1,
					FactoryId = 4, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 5, Name = "Strad 1986", Description = "Скрипка Strad 1986 года выпуска", GoodTypeId = 8,
					FactoryId = 5, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 6, Name = "Strad 2008", Description = "Скрипка Strad 2008 года выпуска", GoodTypeId = 8,
					FactoryId = 5, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 7, Name = "CASIO PI-564", Description = "Синтезатор CASIO PI-564", GoodTypeId = 4,
					FactoryId = 6, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 8, Name = "MusicMan MM-RX-234", Description = "Синтезатор MusicMan MM-RX-234", GoodTypeId = 4,
					FactoryId = 7, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 9, Name = "Fender Stratotaster", Description = "Электрогитара Fender Stratocaster",
					GoodTypeId = 5, FactoryId = 1, Price = new decimal(31000.00)
				});
				applicationDbContext.Goods.Add(new Good
				{
					Id = 10, Name = "ESP Snakebyte", Description = "Именная электрогитара ESP", GoodTypeId = 5,
					FactoryId = 8, Price = new decimal(31000.00)
				});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Models.Any())
			{
				applicationDbContext.Models.Add(new Model {Id = 1, ModelName = "Solaris", MarkId = 1, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 2, ModelName = "Kodiaq", MarkId = 2, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 3, ModelName = "Thunder", MarkId = 3, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 4, ModelName = "Helter", MarkId = 4, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 5, ModelName = "14", MarkId = 5, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 6, ModelName = "Granta", MarkId = 6, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 7, ModelName = "Civic", MarkId = 7, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 8, ModelName = "Logan", MarkId = 8, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 9, ModelName = "Sportage", MarkId = 9, Year = DateTime.UnixEpoch});
				applicationDbContext.Models.Add(new Model {Id = 10, ModelName = "Fusion", MarkId = 10, Year = DateTime.UnixEpoch});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.SuppliesInStore.Any())
			{
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 1, GoodId = 1, StoreId = 1, Date = DateTime.Parse("2019-01-01 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 2, GoodId = 2, StoreId = 1, Date = DateTime.Parse("2019-01-02 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 3, GoodId = 3, StoreId = 1, Date = DateTime.Parse("2019-01-03 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 4, GoodId = 5, StoreId = 1, Date = DateTime.Parse("2019-06-01 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 5, GoodId = 6, StoreId = 1, Date = DateTime.Parse("2019-06-02 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 6, GoodId = 1, StoreId = 2, Date = DateTime.Parse("2019-09-09 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 7, GoodId = 9, StoreId = 2, Date = DateTime.Parse("2019-11-10 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 8, GoodId = 9, StoreId = 2, Date = DateTime.Parse("2019-11-01 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 9, GoodId = 3, StoreId = 3, Date = DateTime.Parse("2019-11-01 00:00:00.000Z")});
				applicationDbContext.SuppliesInStore.Add(new SupplyInStore
					{Id = 10, GoodId = 7, StoreId = 3, Date = DateTime.Parse("2019-11-01 00:00:00.000Z")});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Cars.Any())
			{
				applicationDbContext.Cars.Add(new Car {Id = 1, Serial = "P243XH", Region = "777", ModelId = 1});
				applicationDbContext.Cars.Add(new Car {Id = 2, Serial = "M277XH", Region = "98", ModelId = 2});
				applicationDbContext.Cars.Add(new Car {Id = 3, Serial = "C010BP", Region = "78", ModelId = 3});
				applicationDbContext.Cars.Add(new Car {Id = 4, Serial = "O777AB", Region = "798", ModelId = 4});
				applicationDbContext.Cars.Add(new Car {Id = 5, Serial = "B887XH", Region = "798", ModelId = 5});
				applicationDbContext.Cars.Add(new Car {Id = 6, Serial = "C777CC", Region = "778", ModelId = 6});
				applicationDbContext.Cars.Add(new Car {Id = 7, Serial = "T000YP", Region = "43", ModelId = 7});
				applicationDbContext.Cars.Add(new Car {Id = 8, Serial = "P098PY", Region = "38", ModelId = 8});
				applicationDbContext.Cars.Add(new Car {Id = 9, Serial = "E942MK", Region = "177", ModelId = 9});
				applicationDbContext.Cars.Add(new Car {Id = 10, Serial = "E201XE", Region = "197", ModelId = 10});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Deliveries.Any())
			{
				applicationDbContext.Deliveries.Add(new Delivery {Id = 1, CarId = 1, AddressId = 21, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 2, CarId = 2, AddressId = 22, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 3, CarId = 3, AddressId = 23, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 4, CarId = 1, AddressId = 24, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 5, CarId = 1, AddressId = 25, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 6, CarId = 5, AddressId = 26, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 7, CarId = 7, AddressId = 27, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 8, CarId = 9, AddressId = 28, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 9, CarId = 10, AddressId = 29, CourierId = 3});
				applicationDbContext.Deliveries.Add(new Delivery {Id = 10, CarId = 10, AddressId = 30, CourierId = 3});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.Offers.Any())
			{
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 1, Code = "d0948d5e-7854-4750-8147-213bb7285f38", BuyerId = 1, StaffId = 1, StoreId = 1,
					DeliveryId = null, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 2, Code = "1ccb7f63-6ed0-4197-8579-f5f38e6b637f", BuyerId = 2, StaffId = 2, StoreId = 2,
					DeliveryId = 1, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 3, Code = "599e0d22-26b2-4477-baff-9c48cd6864fb", BuyerId = 3, StaffId = 4, StoreId = 3,
					DeliveryId = null, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 4, Code = "76a0c490-a9ca-447d-9b76-a6819226a168", BuyerId = 4, StaffId = 4, StoreId = 1,
					DeliveryId = 2, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 5, Code = "900a907f-f0b2-43e8-8886-b411166f0d10", BuyerId = 5, StaffId = 5, StoreId = 2,
					DeliveryId = null, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 6, Code = "40609788-51d2-486c-bdc9-847c4d999c07", BuyerId = 6, StaffId = 6, StoreId = 3,
					DeliveryId = 1, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 7, Code = "8a3328f3-4bf0-4fea-9780-0fec3f3b5fa7", BuyerId = 7, StaffId = 7, StoreId = 1,
					DeliveryId = null, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 8, Code = "a42901b6-bbe0-480b-a912-bc0c3f6b657c", BuyerId = 8, StaffId = 8, StoreId = 2,
					DeliveryId = 1, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 9, Code = "62c299fc-7a6c-45f5-9565-8fb088fbf01b", BuyerId = 9, StaffId = 9, StoreId = 3,
					DeliveryId = 2, Summary = new decimal(100.00)
				});
				applicationDbContext.Offers.Add(new Offer
				{
					Id = 10, Code = "89029feb-b04b-44b7-98c8-ba5c5348e81e", BuyerId = 10, StaffId = 10, StoreId = 1,
					DeliveryId = 3, Summary = new decimal(100.00)
				});
				applicationDbContext.SaveChanges();
			}

			if (!applicationDbContext.GoodsInOffers.Any())
			{
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 1, GoodId = 1, OfferId = 1, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 2, GoodId = 9, OfferId = 1, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 3, GoodId = 2, OfferId = 2, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 4, GoodId = 10, OfferId = 2, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 5, GoodId = 5, OfferId = 3, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 6, GoodId = 6, OfferId = 3, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 7, GoodId = 7, OfferId = 4, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 8, GoodId = 8, OfferId = 4, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 9, GoodId = 2, OfferId = 4, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 10, GoodId = 4, OfferId = 5, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 11, GoodId = 10, OfferId = 6, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 12, GoodId = 2, OfferId = 7, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 13, GoodId = 3, OfferId = 8, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 14, GoodId = 6, OfferId = 9, Count = 1});
				applicationDbContext.GoodsInOffers.Add(new GoodInOffer {Id = 15, GoodId = 4, OfferId = 10, Count = 3});
				applicationDbContext.SaveChanges();
			}
		}

		private async Task InitializeRolesAsync(RoleManager<IdentityRole> roleManager)
		{
			await roleManager.CreateAsync(new IdentityRole("Admin"));
			await roleManager.CreateAsync(new IdentityRole("Staff"));
			await roleManager.CreateAsync(new IdentityRole("Courier"));
			await roleManager.CreateAsync(new IdentityRole("Buyer"));
		}

		private async Task InitializeUserAsync(UserManager<User> userManager)
		{
			Log.Logger.Information("Initializing users");
			User newUser;
			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "admin";
			newUser.PasswordHash = hasher.HashPassword(newUser, "admin");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			Thread.Sleep(1000);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "askuzovatkina";
			newUser.PasswordHash = hasher.HashPassword(newUser, "askuzovatkina");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "amotozov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "amotozov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "yklimova";
			newUser.PasswordHash = hasher.HashPassword(newUser, "yklimova");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "yavakov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "yavakov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "ezelentsova";
			newUser.PasswordHash = hasher.HashPassword(newUser, "ezelentsova");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "sberdov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "sberdov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "afedotova";
			newUser.PasswordHash = hasher.HashPassword(newUser, "afedotova");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "akozlov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "akozlov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "promanov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "promanov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "bbelov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "bbelov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "vpetrov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "vpetrov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "ibutov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "ibutov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "rarkhipov";
			newUser.PasswordHash = hasher.HashPassword(newUser, "rarkhipov");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "mmeschera";
			newUser.PasswordHash = hasher.HashPassword(newUser, "mmeschera");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "episarenko";
			newUser.PasswordHash = hasher.HashPassword(newUser, "episarenko");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "mbarabanova";
			newUser.PasswordHash = hasher.HashPassword(newUser, "mbarabanova");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "agolceva";
			newUser.PasswordHash = hasher.HashPassword(newUser, "agolceva");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "ahapersky";
			newUser.PasswordHash = hasher.HashPassword(newUser, "ahapersky");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);

			newUser = new User();
			newUser.Id = Guid.NewGuid().ToString();
			newUser.UserName = "sgibson";
			newUser.PasswordHash = hasher.HashPassword(newUser, "sgibson");
			newUser.TwoFactorEnabled = false;
			newUser.Active = true;
			newUser.CreationDate = DateTime.Now;
			newUser.LastLogin = null;
			await userManager.CreateAsync(newUser);
			users.Add(newUser.UserName, newUser.Id);
		}
	}
}