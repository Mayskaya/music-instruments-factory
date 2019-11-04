using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class ModelRepository : IModelRepository
	{
		public Task<Model> CreateAsync(Model model)
		{
			throw new NotImplementedException();
		}

		public Task<Model> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Model> DeleteAsync(Model model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Model>> RetrieveAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Model> RetrieveAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Model> UpdateAsync(int id, Model model)
		{
			throw new NotImplementedException();
		}

		public Task<Model> UpdateAsync(Model model)
		{
			throw new NotImplementedException();
		}
	}
}
