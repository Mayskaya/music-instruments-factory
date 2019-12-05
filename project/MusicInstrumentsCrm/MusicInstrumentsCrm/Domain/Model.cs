using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
		[JsonIgnore]
		public int MarkId { get; set; }

		public virtual Mark Mark { get; set; }

		[Column("year")]
		public DateTime Year { get; set; }
	}
}