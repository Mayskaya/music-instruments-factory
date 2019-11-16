using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public class AbstractCache<TDomainClass, TKey>
	{
		protected static ConcurrentDictionary<TKey, TDomainClass> cache;
		
		protected TDomainClass UpdateCache(TKey id, TDomainClass model)
		{
			TDomainClass old;
			if (cache.TryGetValue(id, out old))
			{
				if (cache.TryUpdate(id, model, old))
				{
					return model;
				}
			}
			return default;
		}
	}
}
