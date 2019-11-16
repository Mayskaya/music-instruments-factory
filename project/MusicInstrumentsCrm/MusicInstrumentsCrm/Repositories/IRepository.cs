using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public interface IAsyncRepository<TDomainClass, TKey>
	{
		Task<TDomainClass> CreateAsync(TDomainClass model);

		Task<IEnumerable<TDomainClass>> FindAllAsync();

		Task<TDomainClass> FindByIdAsync(TKey id);

		Task<TDomainClass> UpdateAsync(TKey id, TDomainClass model);

		Task<TDomainClass> UpdateAsync(TDomainClass model);

		Task<bool> DeleteAsync(TKey id);

		Task<bool> DeleteAsync(TDomainClass model);

	}

	public interface IRepository<TDomainClass, TKey> {
		TDomainClass Create(TDomainClass model);
		
		IEnumerable<TDomainClass> FindAll();

		TDomainClass FindById(TKey id);

		TDomainClass UpdateByIdAsync(TKey id, TDomainClass model);

		TDomainClass Update(TDomainClass model);

		bool DeleteById(TKey id);

		bool Delete(TDomainClass model);
	}
}
