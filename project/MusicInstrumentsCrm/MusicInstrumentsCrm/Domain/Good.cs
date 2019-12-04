using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Good")]
	public class Good
	{
		[Column("id")]
		[Key]
		[Required]
		public int Id { get; set; }

		[Column("name")]
		[Required]
		public string Name { get; set; }

		[Column("description")]
		[Required]
		public string Description { get; set; }

		[Column("good_type")]
		[JsonIgnore]
		public int GoodTypeId { get; set; }

		public virtual GoodType GoodType { get; set; }

		[Column("factory")]
		[JsonIgnore]
		public int FactoryId { get; set; }

		public virtual Factory Factory { get; set; }

		[Column("price")]
		public decimal Price { get; set; }
	}
}