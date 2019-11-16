using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class CarRepository : AbstractCache<Car, int>, ICarRepository
	{
		private ApplicationDbContext db;

		public CarRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Car>();
			}
		}

		public async Task<Car> CreateAsync(Car model)
		{
			EntityEntry<Car> added = await db.Cars.AddAsync(model);
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
				Car car = db.Cars.Find(id);
				db.Cars.Remove(car);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out car));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Car model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Car>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Car>>(() => cache.Values);
		}

		public async Task<Car> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Car car;
				cache.TryGetValue(id, out car);
				return car;
			});
		}

		public async Task<Car> UpdateAsync(int id, Car model)
		{
			return await Task.Run(() =>
			{
				db.Cars.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Car> UpdateAsync(Car model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}