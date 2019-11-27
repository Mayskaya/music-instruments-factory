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
	public class BuyerRepository : AbstractCache<Buyer, int>, IBuyerRepository
	{
		private readonly ApplicationDbContext db;

		public BuyerRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Buyer>(db.Buyers
					.ToDictionary(b => b.Id));
			}
		}

		public async Task<Buyer> CreateAsync(Buyer model)
		{
			EntityEntry<Buyer> added = await db.Buyers.AddAsync(model);
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
				Buyer buyer = db.Buyers.Find(id);
				db.Buyers.Remove(buyer);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out buyer));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Buyer model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Buyer>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Buyer>>(() => cache.Values);
		}

		public async Task<Buyer> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Buyer buyer;
				cache.TryGetValue(id, out buyer);
				return buyer;
			});
		}

		public async Task<Buyer> UpdateAsync(int id, Buyer model)
		{
			return await Task.Run(() =>
			{
				db.Buyers.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<Buyer> UpdateAsync(Buyer model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}