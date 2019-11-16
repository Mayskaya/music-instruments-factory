using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class GoodRepository : AbstractCache<Good, int>, IGoodRepository 
	{

		private ApplicationDbContext db;

		public GoodRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));
			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Good>(db.Goods.ToDictionary(g => g.Id));
			}
		}

		public async Task<Good> CreateAsync(Good model)
		{
			EntityEntry<Good> added = await db.Goods.AddAsync(model);
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
				Good good = db.Goods.Find(id);
				db.Goods.Remove(good);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out good));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Good model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Good>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Good>>(() => cache.Values);
		}

		public async Task<Good> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Good good;
				cache.TryGetValue(id, out good);
				return good;
			});
		}

		public async Task<Good> UpdateAsync(int id, Good model)
		{
			return await Task.Run(() =>
			{
				db.Goods.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<Good> UpdateAsync(Good model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}
