using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class CountryRepository : ICountryRepository
	{
		public Task<Country> CreateAsync(Country model)
		{
			throw new NotImplementedException();
		}

		public Task<Country> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Country> DeleteAsync(Country model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Country>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Country> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Country> UpdateAsync(int id, Country model)
		{
			throw new NotImplementedException();
		}

		public Task<Country> UpdateAsync(Country model)
		{
			throw new NotImplementedException();
		}
	}
}
