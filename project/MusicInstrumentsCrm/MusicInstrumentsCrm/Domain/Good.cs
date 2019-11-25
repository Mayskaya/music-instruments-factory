using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	[Table("good")]
	public class Good
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("name")]
		public string Name { get; set; }

		[Column("description")]
		public string Description { get; set; }

		[ForeignKey("good_type")]
		public GoodType GoodType { get; set; }

		[ForeignKey("factory")]
		public Factory Factory { get; set; }

		[Column("price")]
		public decimal Price { get; set; }
	}
}
