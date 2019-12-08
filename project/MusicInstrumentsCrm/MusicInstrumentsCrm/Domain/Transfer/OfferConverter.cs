namespace MusicInstrumentsCrm.Domain.Transfer
{
	public class OfferConverter: IConverter<OfferDto, Offer>
	{
		private readonly ApplicationDbContext dbContext;

		public OfferConverter(ApplicationDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public Offer ToDomain(OfferDto dto)
		{
			Offer offer = dbContext.Offers.Find(dto.Id);
			return offer;
		}

		public OfferDto ToDto(Offer domain)
		{
			OfferDto dto = new OfferDto
			{
				Id = domain.Id,
				BuyerInfo = $"{domain.Buyer.FirstName} {domain.Buyer.LastName}",
				SellerInfo = $"{domain.Seller.FirstName} {domain.Seller.LastName}",
				OfferDate = domain.CreationDate
			};
			if (domain.StoreId != null)
			{
				dto.StoreInfo = $"{domain.Store.Name}";
			}

			dto.Summary = domain.Summary;
			return dto;
		}
	}
}