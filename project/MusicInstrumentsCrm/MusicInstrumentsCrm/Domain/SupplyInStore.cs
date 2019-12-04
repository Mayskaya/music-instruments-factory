using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MusicInstrumentsCrm.Domain
{
	[Table("SupplyInStore")]
	public class SupplyInStore
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("good")]
		public int GoodId { get; set; }
		
		public virtual Good Good { get; set; }

		[Column("store")]
		public int StoreId { get; set; }
		
		public virtual Store Store { get; set; }

		[Column("date")]
		public DateTime Date { get; set; }
	}
}
