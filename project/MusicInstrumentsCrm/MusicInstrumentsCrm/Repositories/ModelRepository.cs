using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class ModelRepository : IModelRepository
	{
		public async Task<Model> CreateAsync(Model model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Model model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Model>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Model> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Model> UpdateAsync(int id, Model model)
		{
			throw new NotImplementedException();
		}

		public async Task<Model> UpdateAsync(Model model)
		{
			throw new NotImplementedException();
		}
	}
}
