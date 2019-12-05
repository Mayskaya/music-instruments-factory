using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Car")]
	public class Car
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("serial")]
		public string Serial { get; set; }

		[Column("region")]
		public string Region { get; set; }

		[Column("model")]
		[JsonIgnore]
		public int ModelId { get; set; }

		public virtual Model Model { get; set; }
	}
}