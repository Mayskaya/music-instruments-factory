using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("country")]
	public class Country
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("name")]
		public string Name { get; set; }
	}
}