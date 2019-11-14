using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class StoreRepository : IStoreRepository
	{
		public async Task<Store> CreateAsync(Store model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Store model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Store>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Store> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Store> UpdateAsync(int id, Store model)
		{
			throw new NotImplementedException();
		}

		public async Task<Store> UpdateAsync(Store model)
		{
			throw new NotImplementedException();
		}
	}
}
