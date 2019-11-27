using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("car")]
	public class Car
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("serial")]
		public string Serial { get; set; }

		[Column("region")]
		public string Region { get; set; }

		[ForeignKey("mark_model")]
		public virtual Model Model { get; set; }
	}
}