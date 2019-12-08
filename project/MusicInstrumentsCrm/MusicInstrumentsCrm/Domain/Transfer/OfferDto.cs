using System;

namespace MusicInstrumentsCrm.Domain.Transfer
{
	public class OfferDto
	{
		public int Id { get; set; }
		
		public string BuyerInfo { get; set; }
		
		public string SellerInfo { get; set; }
		
		public DateTime OfferDate { get; set; }
		
		public decimal Summary { get; set; }
		
		public string StoreInfo { get; set; }
	}
}