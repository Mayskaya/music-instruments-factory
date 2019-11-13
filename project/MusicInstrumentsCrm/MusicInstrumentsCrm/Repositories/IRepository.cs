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

		Task<DomainClass> UpdateAsync(DomainClass model);

		Task<DomainClass> DeleteByIdAsync(Key id);

		Task<DomainClass> DeleteAsync(DomainClass model);

	}

	public interface IRepository<DomainClass, Key> {
		DomainClass Create(DomainClass model);
		
		IEnumerable<DomainClass> FindAll();

		DomainClass FindById(Key id);

		DomainClass Update(DomainClass model);

		DomainClass DeleteById(Key id);

		Task<DomainClass> Delete(DomainClass model);
	}
}


/***

		DomainClass Create(DomainClass model);
		
		IEnumerable<DomainClass> FindAll();

		DomainClass FindById(Key id);

		DomainClass Update(DomainClass model);

		DomainClass DeleteById(Key id);

		Task<DomainClass> Delete(DomainClass model);
		**/