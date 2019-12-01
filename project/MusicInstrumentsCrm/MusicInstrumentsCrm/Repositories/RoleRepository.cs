using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class RoleRepository: AbstractCache<Role, int>, IRoleRepository
	{
		private readonly ApplicationDbContext db;

		public RoleRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Role>(db.Roles
					.ToDictionary(o => o.Id));
			}
		}

		public async Task<Role> CreateAsync(Role model)
		{
			EntityEntry<Role> added = await db.Roles.AddAsync(model);
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
				Role role = db.Roles.Find(id);
				db.Roles.Remove(role);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out role));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Role model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Role>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Role>>(() => cache.Values);
		}

		public async Task<Role> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Role role;
				cache.TryGetValue(id, out role);
				return role;
			});
		}

		public async Task<Role> UpdateAsync(int id, Role model)
		{
			return await Task.Run(() =>
			{
				db.Roles.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Role> UpdateAsync(Role model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}