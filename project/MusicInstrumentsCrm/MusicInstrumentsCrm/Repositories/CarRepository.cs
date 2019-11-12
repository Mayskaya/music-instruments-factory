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

		public Task<Car> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Car> DeleteAsync(Car model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<Car>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Car> FindByIdAsync(int id)
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
