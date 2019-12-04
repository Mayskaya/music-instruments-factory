using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Offer")]
	public class Offer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("code")]
		public string Code { get; set; }
		
		[Column("buyer")]
		public int BuyerId { get; set; }

		public virtual Buyer Buyer { get; set; }

		[Column("seller")]
		public int StaffId { get; set; }
		
		public virtual Staff Seller { get; set; }
		
		[Column("store")]
		public int? StoreId { get; set; }

		public virtual Store Store { get;set;}

		[Column("delivery")]
		public int? DeliveryId { get; set; }
		
		public virtual Delivery Delivery { get; set; }

		[Column("sum")]
		public decimal Summary { get; set; }
	}
}
