using MusicInstrumentsCrm.Domain;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace MusicInstrumentsCrm.Repositories
{
	public class OfferRepository : AbstractCache<Offer, int>, IOfferRepository
	{
		private readonly ApplicationDbContext db;

		public OfferRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Offer>(db.Offers
					.ToDictionary(o => o.Id));
			}
		}

		public async Task<Offer> CreateAsync(Offer model)
		{
			EntityEntry<Offer> added = await db.Offers.AddAsync(model);
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
				Offer offer = db.Offers.Find(id);
				db.Offers.Remove(offer);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out offer));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Offer model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Offer>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Offer>>(() => cache.Values);
		}

		public async Task<Offer> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Offer offer;
				cache.TryGetValue(id, out offer);
				return offer;
			});
		}

		public async Task<Offer> UpdateAsync(int id, Offer model)
		{
			return await Task.Run(() =>
			{
				db.Offers.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Offer> UpdateAsync(Offer model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}