using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class DeliveryRepository : IDeliveryRepository
	{
		public async Task<Delivery> CreateAsync(Delivery model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Delivery model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Delivery>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Delivery> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Delivery> UpdateAsync(int id, Delivery model)
		{
			throw new NotImplementedException();
		}

		public async Task<Delivery> UpdateAsync(Delivery model)
		{
			throw new NotImplementedException();
		}
	}
}
