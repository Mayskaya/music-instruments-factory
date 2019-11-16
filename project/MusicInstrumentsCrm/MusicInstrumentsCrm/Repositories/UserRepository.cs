using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class UserRepository : AbstractCache<User, int>, IUserRepository
	{

		private ApplicationDbContext db;

		public UserRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));


			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, User>();
			}
		}

		public async Task<User> CreateAsync(User model)
		{
			EntityEntry<User> added = await db.Users.AddAsync(model);
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
				User user = db.Users.Find(id);
				db.Users.Remove(user);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out user));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(User model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<User>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<User>>(() => cache.Values);
		}

		public async Task<User> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				User user;
				cache.TryGetValue(id, out user);
				return user;
			});
		}

		public async Task<User> UpdateAsync(int id, User model)
		{
			return await Task.Run(() =>
			{
				db.Users.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<User> UpdateAsync(User model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}
