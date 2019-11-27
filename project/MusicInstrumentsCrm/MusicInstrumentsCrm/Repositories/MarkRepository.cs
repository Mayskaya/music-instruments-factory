using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class MarkRepository : AbstractCache<Mark, int>, IMarkRepository
	{
		private readonly ApplicationDbContext db;

		public MarkRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Mark>(db.Marks
					.ToDictionary(m => m.Id));
			}
		}

		public async Task<Mark> CreateAsync(Mark model)
		{
			EntityEntry<Mark> added = await db.Marks.AddAsync(model);
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
				Mark mark = db.Marks.Find(id);
				db.Marks.Remove(mark);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out mark));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Mark model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Mark>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Mark>>(() => cache.Values);
		}

		public async Task<Mark> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Mark mark;
				cache.TryGetValue(id, out mark);
				return mark;
			});
		}

		public async Task<Mark> UpdateAsync(int id, Mark model)
		{
			return await Task.Run(() =>
			{
				db.Marks.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Mark> UpdateAsync(Mark model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}