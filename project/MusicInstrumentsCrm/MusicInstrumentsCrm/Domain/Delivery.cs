using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Delivery")]
	public class Delivery
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[ForeignKey("car")]
		public virtual Car Car { get; set; }

		[ForeignKey("address")]
		public virtual Address Address { get; set; }

		[ForeignKey("courier")]
		public virtual Staff Courier { get; set; }
	}
}