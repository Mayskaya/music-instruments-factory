using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("offer")]
	public class Offer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("code")]
		public string Code { get; set; }

		[ForeignKey("buyer")]
		public virtual Buyer Buyer { get; set; }

		[ForeignKey("seller")]
		public virtual Staff Seller { get; set; }

		[ForeignKey("store")]
		public virtual Store Store {get;set;}

		[ForeignKey("delivery")]
		public virtual Delivery Delivery { get; set; }

		[Column("sum")]
		public decimal Summary { get; set; }
	}
}
