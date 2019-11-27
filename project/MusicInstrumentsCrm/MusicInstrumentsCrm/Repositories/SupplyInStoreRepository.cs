using MusicInstrumentsCrm.Domain;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace MusicInstrumentsCrm.Repositories
{
	public class SupplyInStoreRepository : AbstractCache<SupplyInStore, int>, ISupplyInStoreRepository
	{
		private readonly ApplicationDbContext db;

		public SupplyInStoreRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, SupplyInStore>(db.SuppliesInStore
					.ToDictionary(store => store.Id));
			}
		}

		public async Task<SupplyInStore> CreateAsync(SupplyInStore model)
		{
			EntityEntry<SupplyInStore> added = await db.SuppliesInStore.AddAsync(model);
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
				SupplyInStore supplyInStore = db.SuppliesInStore.Find(id);
				db.SuppliesInStore.Remove(supplyInStore);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out supplyInStore));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(SupplyInStore model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<SupplyInStore>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<SupplyInStore>>(() => cache.Values);
		}

		public async Task<SupplyInStore> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				SupplyInStore supplyInStore;
				cache.TryGetValue(id, out supplyInStore);
				return supplyInStore;
			});
		}

		public async Task<SupplyInStore> UpdateAsync(int id, SupplyInStore model)
		{
			return await Task.Run(() =>
			{
				db.SuppliesInStore.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<SupplyInStore> UpdateAsync(SupplyInStore model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}