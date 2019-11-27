using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class FactoryRepository : AbstractCache<Factory, int>, IFactoryRepository
	{ 
		private readonly ApplicationDbContext db;

		public FactoryRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));
			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Factory>(db.Factories
					.ToDictionary(f => f.Id));
			}
		}

		public async Task<Factory> CreateAsync(Factory model)
		{
			EntityEntry<Factory> added = await db.Factories.AddAsync(model);
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
				Factory factory = db.Factories.Find(id);
				db.Factories.Remove(factory);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out factory));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Factory model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Factory>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Factory>>(() => cache.Values);
		}

		public async Task<Factory> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Factory good;
				cache.TryGetValue(id, out good);
				return good;
			});
		}

		public async Task<Factory> UpdateAsync(int id, Factory model)
		{
			return await Task.Run(() =>
			{
				db.Factories.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<Factory> UpdateAsync(Factory model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}
