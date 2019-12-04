using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Offer")]
	public class Offer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("code")]
		public string Code { get; set; }

		[Column("buyer")]
		[JsonIgnore]
		public int BuyerId { get; set; }

		public virtual Buyer Buyer { get; set; }

		[Column("seller")]
		[JsonIgnore]
		public int StaffId { get; set; }

		public virtual Staff Seller { get; set; }

		[Column("store")]
		[JsonIgnore]
		public int? StoreId { get; set; }

		public virtual Store Store { get; set; }

		[Column("delivery")]
		[JsonIgnore]
		public int? DeliveryId { get; set; }

		public virtual Delivery Delivery { get; set; }

		[Column("sum")]
		public decimal Summary { get; set; }
	}
}