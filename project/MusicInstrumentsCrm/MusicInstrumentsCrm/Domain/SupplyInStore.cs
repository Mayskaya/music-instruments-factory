using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	public class SupplyInStore
	{
		public int Id { get; set; }

		public Good Good { get; set; }

		public Store Store { get; set; }

		public DateTime Date { get; set; }
	}
}
