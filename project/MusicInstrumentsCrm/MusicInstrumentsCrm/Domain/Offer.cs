using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("offer", Schema = "public")]
	public class Offer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("code")]
		public string Code { get; set; }

		[ForeignKey("buyer")]
		public Buyer Buyer { get; set; }

		[ForeignKey("seller")]
		public Staff Seller { get; set; }

		[ForeignKey("store")]
		public Store Store {get;set;}

		[ForeignKey("delivery")]
		public Delivery Delivery { get; set; }

		[Column("summary")]
		public decimal Summary { get; set; }
	}
}
