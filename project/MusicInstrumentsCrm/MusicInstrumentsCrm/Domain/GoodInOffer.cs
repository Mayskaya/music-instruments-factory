using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("GoodInOffer")]
	public class GoodInOffer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("good")]
		public int GoodId { get; set; }
		
		public virtual Good Good { get; set; }

		[Column("offer")]
		public int OfferId { get; set; }
		
		public virtual Offer Offer { get; set; }

		[Column("count")]
		public int Count { get; set; }
	}
}
