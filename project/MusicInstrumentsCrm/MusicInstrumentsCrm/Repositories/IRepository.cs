using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public interface IRepository<DomainClass, Key>
	{
		Task<DomainClass> CreateAsync(DomainClass model);

		Task<IEnumerable<DomainClass>> FindAllAsync();

		Task<DomainClass> FindByIdAsync(Key id);

		Task<DomainClass> UpdateAsync(DomainClass model);

		Task<DomainClass> DeleteByIdAsync(Key id);

		Task<DomainClass> DeleteAsync(DomainClass model);
	}
}
