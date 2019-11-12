using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicInstrumentsCrm.Domain;

namespace MusicInstrumentsCrm.Repositories
{
	public class UserRepository : IUserRepository
	{
		public Task<User> CreateAsync(User model)
		{
			throw new NotImplementedException();
		}

		public Task<User> DeleteByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<User> DeleteAsync(User model)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<User>> FindAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<User> FindByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<User> UpdateAsync(int id, User model)
		{
			throw new NotImplementedException();
		}

		public Task<User> UpdateAsync(User model)
		{
			throw new NotImplementedException();
		}
	}
}
