using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class AddressRepository : IAddressRepository
	{
		public Task<Address> CreateAsync(Address model)
		{
			throw new NotImplementedException();
		}

		public Task<Address> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Address> DeleteAsync(Address model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Address>> RetrieveAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Address> RetrieveAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Address> UpdateAsync(int id, Address model)
		{
			throw new NotImplementedException();
		}

		public Task<Address> UpdateAsync(Address model)
		{
			throw new NotImplementedException();
		}
	}
}
