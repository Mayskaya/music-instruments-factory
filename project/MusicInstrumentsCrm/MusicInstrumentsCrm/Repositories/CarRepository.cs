using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class CarRepository : ICarRepository
	{
		public Task<Car> CreateAsync(Car model)
		{
			throw new NotImplementedException();
		}

		public Task<Car> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Car> DeleteAsync(Car model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Car>> RetrieveAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Car> RetrieveAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Car> UpdateAsync(int id, Car model)
		{
			throw new NotImplementedException();
		}

		public Task<Car> UpdateAsync(Car model)
		{
			throw new NotImplementedException();
		}
	}
}
