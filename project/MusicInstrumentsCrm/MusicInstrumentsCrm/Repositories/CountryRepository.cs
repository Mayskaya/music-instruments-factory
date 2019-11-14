using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class CountryRepository : ICountryRepository
	{
		public async Task<Country> CreateAsync(Country model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Country model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Country>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Country> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Country> UpdateAsync(int id, Country model)
		{
			throw new NotImplementedException();
		}

		public async Task<Country> UpdateAsync(Country model)
		{
			throw new NotImplementedException();
		}
	}
}
