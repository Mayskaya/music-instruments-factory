using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class StaffRepository : AbstractCache<Staff, int>, IStaffRepository
	{

		private ApplicationDbContext db;

		public StaffRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Staff>();
			}
		}

		public async Task<Staff> CreateAsync(Staff model)
		{
			EntityEntry<Staff> added = await db.Staffs.AddAsync(model);
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
				Staff staff = db.Staffs.Find(id);
				db.Staffs.Remove(staff);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out staff));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Staff model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Staff>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Staff>>(() => cache.Values);
		}

		public async Task<Staff> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Staff staff;
				cache.TryGetValue(id, out staff);
				return staff;
			});
		}

		public async Task<Staff> UpdateAsync(int id, Staff model)
		{
			return await Task.Run(() =>
			{
				db.Staffs.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<Staff> UpdateAsync(Staff model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}
