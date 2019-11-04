using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	public class GoodInOffer
	{
		public int Id { get; set; }

		public Good Good { get; set; }

		public Offer Offer { get; set; }

		public int Count { get; set; }
	}
}
