using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class ModelRepository : AbstractCache<Model, int>, IModelRepository
	{
		private ApplicationDbContext db;

		public ModelRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Model>();
			}
		}

		public async Task<Model> CreateAsync(Model model)
		{
			EntityEntry<Model> added = await db.Models.AddAsync(model);
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
				Model model = db.Models.Find(id);
				db.Models.Remove(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out model));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Model model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Model>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Model>>(() => cache.Values);
		}

		public async Task<Model> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Model model;
				cache.TryGetValue(id, out model);
				return model;
			});
		}

		public async Task<Model> UpdateAsync(int id, Model model)
		{
			return await Task.Run(() =>
			{
				db.Models.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<Model> UpdateAsync(Model model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}