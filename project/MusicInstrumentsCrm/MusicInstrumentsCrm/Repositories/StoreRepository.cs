using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class StoreRepository : IStoreRepository
	{
		public Task<Store> CreateAsync(Store model)
		{
			throw new NotImplementedException();
		}

		public Task<Store> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Store> DeleteAsync(Store model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Store>> RetrieveAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Store> RetrieveAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Store> UpdateAsync(int id, Store model)
		{
			throw new NotImplementedException();
		}

		public Task<Store> UpdateAsync(Store model)
		{
			throw new NotImplementedException();
		}
	}
}
