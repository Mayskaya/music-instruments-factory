using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class CarRepository : ICarRepository
	{
		public async Task<Car> CreateAsync(Car model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(Car model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Car>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<Car> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Car> UpdateAsync(int id, Car model)
		{
			throw new NotImplementedException();
		}

		public async Task<Car> UpdateAsync(Car model)
		{
			throw new NotImplementedException();
		}
	}
}
