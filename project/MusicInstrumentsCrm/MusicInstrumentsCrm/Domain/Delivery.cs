using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("delivery", Schema = "public")]
	public class Delivery
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[ForeignKey("car")]
		public Car Car { get; set; }

		[ForeignKey("address")]
		public Address Address { get; set; }

		[ForeignKey("courier")]
		public Staff Courier { get; set; }
	}
}