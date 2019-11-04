using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class DeliveryRepository : IDeliveryRepository
	{
		public Task<Delivery> CreateAsync(Delivery model)
		{
			throw new NotImplementedException();
		}

		public Task<Delivery> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Delivery> DeleteAsync(Delivery model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Delivery>> RetrieveAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Delivery> RetrieveAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Delivery> UpdateAsync(int id, Delivery model)
		{
			throw new NotImplementedException();
		}

		public Task<Delivery> UpdateAsync(Delivery model)
		{
			throw new NotImplementedException();
		}
	}
}
