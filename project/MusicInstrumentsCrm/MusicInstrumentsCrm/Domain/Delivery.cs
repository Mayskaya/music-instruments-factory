using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Delivery")]
	public class Delivery
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("car")]
		public int CarId { get; set; }

		public virtual Car Car { get; set; }

		[Column("address")]
		[JsonIgnore]
		public int AddressId { get; set; }

		public virtual Address Address { get; set; }

		[Column("courier")]
		[JsonIgnore]
		public int CourierId { get; set; }

		public virtual Staff Courier { get; set; }
	}
}