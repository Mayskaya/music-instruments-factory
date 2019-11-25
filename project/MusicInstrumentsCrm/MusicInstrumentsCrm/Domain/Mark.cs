using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("mark", Schema = "public")]
	public class Mark
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("name")]
		public string Name { get; set; }

		[ForeignKey("country")]
		public Country Country { get; set; }

	}
}
