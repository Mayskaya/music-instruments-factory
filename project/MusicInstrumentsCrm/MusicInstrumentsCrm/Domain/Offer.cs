using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	public class Offer
	{

		public int Id { get; set; }

		public string Code { get; set; }

		public Buyer Buyer { get; set; }

		public Staff Seller { get; set; }

		public Store Store {get;set;}

		public Delivery Delivery { get; set; }

		public decimal Summary { get; set; }
	}
}
