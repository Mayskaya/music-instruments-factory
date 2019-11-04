using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	public class Good
	{

		public int Id { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public GoodType GoodType { get; set; }

		public Factory Factory { get; set; }

		public decimal Price { get; set; }
	}
}
