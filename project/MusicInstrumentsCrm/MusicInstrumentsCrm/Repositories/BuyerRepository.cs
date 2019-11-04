using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class BuyerRepository : IBuyerRepository
	{
		public Task<Buyer> CreateAsync(Buyer model)
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> DeleteAsync(Buyer model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Buyer>> RetrieveAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> RetrieveAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> UpdateAsync(int id, Buyer model)
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> UpdateAsync(Buyer model)
		{
			throw new NotImplementedException();
		}
	}
}
