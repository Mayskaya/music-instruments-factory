using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class UserRepository : AbstractCache<User, int>, IUserRepository
	{
		private readonly ApplicationDbContext db;

		public UserRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));
//
//
//			if (cache == null)
//			{
//				cache = new ConcurrentDictionary<int, User>(db.MyUsers
//					.ToDictionary(u => u.MyId));
//			}
		}

		public async Task<User> CreateAsync(User model)
		{
//			EntityEntry<User> added = await db.MyUsers.AddAsync(model);
//			int affected = await db.SaveChangesAsync();
//			if (affected == 1)
//			{
//				return cache.AddOrUpdate(model.MyId, model, UpdateCache);
//			}
//
			return null;
		}

		public async Task<bool> DeleteAsync(int id)
		{
			return await Task.Run(() =>
			{
//				User user = db.MyUsers.Find(id);
//				db.MyUsers.Remove(user);
//				int affected = db.SaveChanges();
//				if (affected == 1)
//				{
//					return Task.Run(() => cache.TryRemove(id, out user));
//				}

				return false;
			});
		}

		public async Task<bool> DeleteAsync(User model)
		{
//			return await Task.Run(() => DeleteAsync(model.MyId));
			return false;
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
				db.MyUsers.Update(model);
				var affected = db.SaveChanges();
				if (affected == 1) return Task.Run(() => UpdateCache(id, model));

				return null;
			});
		}

		public async Task<User> UpdateAsync(User model)
		{
//			return await Task.Run(() => UpdateAsync(model.MyId, model));
			return null;
		}
	}
}