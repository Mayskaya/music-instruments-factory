using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class MarkRepository : IMarkRepository
	{
		public Task<Mark> CreateAsync(Mark model)
		{
			throw new NotImplementedException();
		}

		public Task<Mark> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Mark> DeleteAsync(Mark model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Mark>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Mark> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Mark> UpdateAsync(int id, Mark model)
		{
			throw new NotImplementedException();
		}

		public Task<Mark> UpdateAsync(Mark model)
		{
			throw new NotImplementedException();
		}
	}
}
