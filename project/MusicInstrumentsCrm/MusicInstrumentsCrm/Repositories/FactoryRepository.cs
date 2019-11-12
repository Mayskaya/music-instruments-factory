using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class FactoryRepository : IFactoryRepository
	{
		public Task<Factory> CreateAsync(Factory model)
		{
			throw new NotImplementedException();
		}

		public Task<Factory> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Factory> DeleteAsync(Factory model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Factory>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Factory> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Factory> UpdateAsync(int id, Factory model)
		{
			throw new NotImplementedException();
		}

		public Task<Factory> UpdateAsync(Factory model)
		{
			throw new NotImplementedException();
		}
	}
}
