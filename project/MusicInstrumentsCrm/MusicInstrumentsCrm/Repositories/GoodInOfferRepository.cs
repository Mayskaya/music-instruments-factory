using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public class GoodInOfferRepository : AbstractCache<GoodInOffer, int>, IGoodInOfferRepository
	{
		private ApplicationDbContext db;

		public GoodInOfferRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, GoodInOffer>(db.GoodsInOffers.ToDictionary(gio => gio.Id));
			}
		}

		public async Task<GoodInOffer> CreateAsync(GoodInOffer model)
		{
			EntityEntry<GoodInOffer> added = await db.GoodsInOffers.AddAsync(model);
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
				GoodInOffer goodInOffer = db.GoodsInOffers.Find(id);
				db.GoodsInOffers.Remove(goodInOffer);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out goodInOffer));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(GoodInOffer model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<GoodInOffer>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<GoodInOffer>>(() => cache.Values);
		}

		public async Task<GoodInOffer> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				GoodInOffer goodInOffer;
				cache.TryGetValue(id, out goodInOffer);
				return goodInOffer;
			});
		}

		public async Task<GoodInOffer> UpdateAsync(int id, GoodInOffer model)
		{
			return await Task.Run(() =>
			{
				db.GoodsInOffers.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<GoodInOffer> UpdateAsync(GoodInOffer model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}