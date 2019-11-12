using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class GoodRepository : IGoodRepository
	{
		public Task<Good> CreateAsync(Good model)
		{
			throw new NotImplementedException();
		}

		public Task<Good> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Good> DeleteAsync(Good model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Good>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Good> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Good> UpdateAsync(int id, Good model)
		{
			throw new NotImplementedException();
		}

		public Task<Good> UpdateAsync(Good model)
		{
			throw new NotImplementedException();
		}
	}
}
