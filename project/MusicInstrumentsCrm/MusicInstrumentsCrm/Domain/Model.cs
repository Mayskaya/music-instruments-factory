using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Model")]
	public class Model
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("model_name")]
		public string ModelName { get; set; }
		
		[Column("mark")]
		public int MarkId { get; set; }

		public virtual Mark Mark { get; set; }

		[Column("year")]
		public DateTime Year { get; set; }
	}
}
