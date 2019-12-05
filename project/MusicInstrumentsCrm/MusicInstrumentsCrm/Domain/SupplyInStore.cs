using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("SupplyInStore")]
	public class SupplyInStore
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("good")]
		[JsonIgnore]
		public int GoodId { get; set; }

		public virtual Good Good { get; set; }

		[Column("store")]
		[JsonIgnore]
		public int StoreId { get; set; }

		public virtual Store Store { get; set; }

		[Column("date")]
		public DateTime Date { get; set; }
	}
}