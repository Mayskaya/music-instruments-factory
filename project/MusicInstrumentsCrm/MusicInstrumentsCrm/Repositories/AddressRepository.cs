using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class AddressRepository : IAddressRepository
	{
		public async Task<Address> CreateAsync(Address model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Address model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Address>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Address> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Address> UpdateAsync(int id, Address model)
		{
			throw new NotImplementedException();
		}

		public async Task<Address> UpdateAsync(Address model)
		{
			throw new NotImplementedException();
		}
	}
}
