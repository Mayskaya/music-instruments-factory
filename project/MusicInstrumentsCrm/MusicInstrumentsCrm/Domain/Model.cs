using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	public class Model
	{
		public int Id { get; set; }

		public string ModelName { get; set; }

		public Mark Mark { get; set; }

		public DateTime Year { get; set; }
	}
}
