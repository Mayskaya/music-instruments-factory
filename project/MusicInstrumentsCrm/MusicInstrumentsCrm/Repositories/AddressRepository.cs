using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class AddressRepository : AbstractCache<Address, int>, IAddressRepository
	{
		private readonly ApplicationDbContext db;

		public AddressRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Address>(db.Addresses
					.ToDictionary(a => a.Id));
			}
		}

		public async Task<Address> CreateAsync(Address model)
		{
			EntityEntry<Address> added = await db.Addresses.AddAsync(model);
			int affected = await db.SaveChangesAsync();
			if (affected == 1)
			{
				return cache.AddOrUpdate(model.Id, model, UpdateCache);
			}

			return null;
		}

		public async Task<bool> DeleteAsync(int id)
		{
			return await Task.Run(() =>
			{
				Address address = db.Addresses.Find(id);
				db.Addresses.Remove(address);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out address));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Address model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Address>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Address>>(() => cache.Values);
		}

		public async Task<Address> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Address address;
				cache.TryGetValue(id, out address);
				return address;
			});
		}

		public async Task<Address> UpdateAsync(int id, Address model)
		{
			return await Task.Run(() =>
			{
				db.Addresses.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Address> UpdateAsync(Address model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}