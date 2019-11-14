using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public interface IAsyncRepository<DomainClass, Key>
	{
		Task<DomainClass> CreateAsync(DomainClass model);

		Task<IEnumerable<DomainClass>> FindAllAsync();

		Task<DomainClass> FindByIdAsync(Key id);

		Task<DomainClass> UpdateAsync(Key id, DomainClass model);

		Task<DomainClass> UpdateAsync(DomainClass model);

		Task<bool> DeleteAsync(Key id);

		Task<bool> DeleteAsync(DomainClass model);

	}

	public interface IRepository<DomainClass, Key> {
		DomainClass Create(DomainClass model);
		
		IEnumerable<DomainClass> FindAll();

		DomainClass FindById(Key id);

		DomainClass UpdateByIdAsync(Key id, DomainClass model);

		DomainClass Update(DomainClass model);

		bool DeleteById(Key id);

		bool Delete(DomainClass model);
	}
}
