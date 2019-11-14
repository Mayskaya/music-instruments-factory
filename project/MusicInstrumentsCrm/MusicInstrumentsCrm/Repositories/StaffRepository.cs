using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class StaffRepository : IStaffRepository
	{
		public async Task<Staff> CreateAsync(Staff model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Staff model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Staff>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Staff> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Staff> UpdateAsync(int id, Staff model)
		{
			throw new NotImplementedException();
		}

		public async Task<Staff> UpdateAsync(Staff model)
		{
			throw new NotImplementedException();
		}
	}
}
