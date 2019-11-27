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
	public class CountryRepository : AbstractCache<Country, int>, ICountryRepository
	{
		private readonly ApplicationDbContext db;

		public CountryRepository(ApplicationDbContext db)
		{
			this.db = db ?? throw new ArgumentNullException(nameof(db));

			if (cache == null)
			{
				cache = new ConcurrentDictionary<int, Country>(db.Countries
					.ToDictionary(c => c.Id));
			}
		}

		public async Task<Country> CreateAsync(Country model)
		{
			EntityEntry<Country> added = await db.Countries.AddAsync(model);
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
				Country country = db.Countries.Find(id);
				db.Countries.Remove(country);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => cache.TryRemove(id, out country));
				}

				return null;
			});
		}

		public async Task<bool> DeleteAsync(Country model)
		{
			return await Task.Run(() => DeleteAsync(model.Id));
		}

		public async Task<IEnumerable<Country>> FindAllAsync()
		{
			return await Task.Run<IEnumerable<Country>>(() => cache.Values);
		}

		public async Task<Country> FindByIdAsync(int id)
		{
			return await Task.Run(() =>
			{
				Country country;
				cache.TryGetValue(id, out country);
				return country;
			});
		}

		public async Task<Country> UpdateAsync(int id, Country model)
		{
			return await Task.Run(() =>
			{
				db.Countries.Update(model);
				int affected = db.SaveChanges();
				if (affected == 1)
				{
					return Task.Run(() => UpdateCache(id, model));
				}

				return null;
			});
		}

		public async Task<Country> UpdateAsync(Country model)
		{
			return await Task.Run(() => UpdateAsync(model.Id, model));
		}
	}
}