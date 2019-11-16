using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public class GoodTypeRepository : AbstractCache<GoodType, int>, IGoodTypeRepository
	{

		private ApplicationDbContext db;

		public GoodTypeRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, GoodType>(db.GoodTypes.ToDictionary(g => g.Id));
			}
		}

		public async Task<GoodType> CreateAsync(GoodType model)
		{
			EntityEntry<GoodType> added = await db.GoodTypes.AddAsync(model);
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
				GoodType goodType = db.GoodTypes.Find(id);
				db.GoodTypes.Remove(goodType);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out goodType));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(GoodType model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<GoodType>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<GoodType>>(() => cache.Values);
		}

		public async Task<GoodType> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				GoodType goodType;
				cache.TryGetValue(id, out goodType);
				return goodType;
			});
		}

		public async Task<GoodType> UpdateAsync(int id, GoodType model)
		{
			return await Task.Run(() =>
			{
				db.GoodTypes.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<GoodType> UpdateAsync(GoodType model)
		{
			return await Task.Run(()=> UpdateAsync(model.Id, model));
		}
	}
}
