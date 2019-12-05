using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Mark")]
	public class Mark
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("name")]
		public string Name { get; set; }

		[Column("country")]
		[JsonIgnore]
		public int CountryId { get; set; }

		public virtual Country Country { get; set; }
	}
}