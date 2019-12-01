using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("GoodType")]

	public class GoodType
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("type_name")]
		public string TypeName { get; set; }

	}
}