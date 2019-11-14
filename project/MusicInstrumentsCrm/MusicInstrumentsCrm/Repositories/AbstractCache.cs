using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Repositories
{
	public class AbstractCache<DomainClass, Key>
	{
		protected static ConcurrentDictionary<Key, DomainClass> cache;
		
		protected DomainClass UpdateCache(Key id, DomainClass model)
		{
			DomainClass old;
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
