using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class UserRepository : IUserRepository
	{
		public async Task<User> CreateAsync(User model)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> DeleteAsync(User model)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<User>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public async Task<User> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<User> UpdateAsync(int id, User model)
		{
			throw new NotImplementedException();
		}

		public async Task<User> UpdateAsync(User model)
		{
			throw new NotImplementedException();
		}
	}
}
