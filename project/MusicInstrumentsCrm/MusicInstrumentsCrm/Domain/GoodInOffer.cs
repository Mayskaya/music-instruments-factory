using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("GoodInOffer")]
	public class GoodInOffer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("good")]
		[JsonIgnore]
		public int GoodId { get; set; }

		public virtual Good Good { get; set; }

		[Column("offer")]
		[JsonIgnore]
		public int OfferId { get; set; }

		public virtual Offer Offer { get; set; }

		[Column("count")]
		public int Count { get; set; }
	}
}