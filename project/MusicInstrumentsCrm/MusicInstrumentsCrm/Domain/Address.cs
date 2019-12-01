using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Address")]
	public class Address{
	
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("full_address")]
		public string FullAddress { get; set; }
	}
}