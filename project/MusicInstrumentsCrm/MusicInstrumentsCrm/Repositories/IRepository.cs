using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public interface IRepository<DomainClass, Key>
	{
		Task<DomainClass> CreateAsync(DomainClass model);

		Task<IEnumerable<DomainClass>> RetrieveAllAsync();

		Task<DomainClass> RetrieveAsync(Key id);

		Task<DomainClass> UpdateAsync(Key id, DomainClass model);

		Task<DomainClass> UpdateAsync(DomainClass model);

		Task<DomainClass> DeleteAsync(Key id);

		Task<DomainClass> DeleteAsync(DomainClass model);
	}
}
