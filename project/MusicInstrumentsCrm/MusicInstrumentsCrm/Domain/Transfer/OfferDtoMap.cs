using System;
using CsvHelper;
using CsvHelper.Configuration;
using CsvHelper.TypeConversion;

namespace MusicInstrumentsCrm.Domain.Transfer
{
	public class OfferDtoMap : ClassMap<OfferDto>
	{
		public OfferDtoMap()
		{
			Map(m => m.Id).Index(0).Name("id");
			Map(m => m.BuyerInfo).Index(1).Name("buyer");
			Map(m => m.SellerInfo).Index(2).Name("seller");
			Map(m => m.OfferDate).Index(3).Name("sell_date");
			Map(m => m.StoreInfo).Index(4).Name("store");
			Map(m => m.Summary).Index(5).Name("sum");
		}
	}
}