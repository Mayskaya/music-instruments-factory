using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Store")]
	public class Store
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("name")]
		public string Name { get; set; }

		[Column("address")]
		[JsonIgnore]
		public int AddressId { get; set; }

		public virtual Address Address { get; set; }

		[Column("foundation_date")]
		public DateTime FoundationDate { get; set; }
	}
}