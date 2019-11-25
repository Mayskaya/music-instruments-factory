using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("goodinoffer", Schema = "public")]
	public class GoodInOffer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[ForeignKey("good")]
		public Good Good { get; set; }

		[ForeignKey("offer")]
		public Offer Offer { get; set; }

		[Column("count")]
		public int Count { get; set; }
	}
}
