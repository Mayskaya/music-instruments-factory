using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class StaffRepository : IStaffRepository
	{
		public Task<Staff> CreateAsync(Staff model)
		{
			throw new NotImplementedException();
		}

		public Task<Staff> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Staff> DeleteAsync(Staff model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Staff>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Staff> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Staff> UpdateAsync(int id, Staff model)
		{
			throw new NotImplementedException();
		}

		public Task<Staff> UpdateAsync(Staff model)
		{
			throw new NotImplementedException();
		}
	}
}
