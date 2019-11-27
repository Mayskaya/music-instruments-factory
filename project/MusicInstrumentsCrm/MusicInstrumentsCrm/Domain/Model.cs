using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("model")]
	public class Model
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("model_name")]
		public string ModelName { get; set; }

		[ForeignKey("mark")]
		public virtual Mark Mark { get; set; }

		[Column("year")]
		public DateTime Year { get; set; }
	}
}
