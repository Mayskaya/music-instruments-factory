using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class StoreRepository : AbstractCache<Store, int>, IStoreRepository
	{
		private ApplicationDbContext db;

		public StoreRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Store>();
			}
		}

		public async Task<Store> CreateAsync(Store model)
		{
			EntityEntry<Store> added = await db.Stores.AddAsync(model);
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
				Store store = db.Stores.Find(id);
				db.Stores.Remove(store);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out store));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Store model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Store>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Store>>(() => cache.Values);
		}

		public async Task<Store> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Store store;
				cache.TryGetValue(id, out store);
				return store;
			});
		}

		public async Task<Store> UpdateAsync(int id, Store model)
		{
			return await Task.Run(() =>
			{
				db.Stores.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Store> UpdateAsync(Store model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}