using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class DeliveryRepository : AbstractCache<Delivery, int>, IDeliveryRepository
	{

		private ApplicationDbContext db;

		public DeliveryRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Delivery>();
			}
		}

		public async Task<Delivery> CreateAsync(Delivery model)
		{
			EntityEntry<Delivery> added = await db.Deliveries.AddAsync(model);
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
				Delivery delivery = db.Deliveries.Find(id);
				db.Deliveries.Remove(delivery);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out delivery));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Delivery model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Delivery>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Delivery>>(() => cache.Values);
		}

		public async Task<Delivery> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Delivery delivery;
				cache.TryGetValue(id, out delivery);
				return delivery;
			});
		}

		public async Task<Delivery> UpdateAsync(int id, Delivery model)
		{
			return await Task.Run(() =>
			{
				db.Deliveries.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}
				return null;
			});
		}

		public async Task<Delivery> UpdateAsync(Delivery model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}
