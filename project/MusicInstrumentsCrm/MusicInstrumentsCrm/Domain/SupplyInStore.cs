using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	[Table("supplyinstore")]
	public class SupplyInStore
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[ForeignKey("good")]
		public virtual Good Good { get; set; }

		[ForeignKey("store")]
		public virtual Store Store { get; set; }

		[Column("date")]
		public DateTime Date { get; set; }
	}
}
