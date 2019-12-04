using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Good")]
	public class Good
	{
		[Column("id")]
		[Key]
		[Required]
		public int Id { get; set; }

		[Column("name")]
		[Required]
		public string Name { get; set; }

		[Column("description")]
		[Required]
		public string Description { get; set; }
		
		[Column("good_type")]
		public int GoodTypeId { get; set; }

		public virtual GoodType GoodType { get; set; }

		[Column("factory")]
		public int FactoryId { get; set; }
		
		public virtual Factory Factory { get; set; }

		[Column("price")]
		public decimal Price { get; set; }
	}
}
