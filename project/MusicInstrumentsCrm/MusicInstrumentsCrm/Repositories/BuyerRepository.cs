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

		public Task<Buyer> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> DeleteAsync(Buyer model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Buyer>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Buyer> FindByIdAsync(int id)
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
