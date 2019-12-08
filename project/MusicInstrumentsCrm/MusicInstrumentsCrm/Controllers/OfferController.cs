using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Repositories;


namespace MusicInstrumentsCrm.Controllers
{
	[Route("api/v1/[controller]")]
	[AllowAnonymous]
	public class OfferController : Controller
	{
		private readonly IOfferRepository offerRepository;

		public OfferController(IOfferRepository offerRepository)
		{
			this.offerRepository = offerRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Offer>> GetOffers()
		{
			return await offerRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetOffer")]
		public async Task<IActionResult> GetOffer(int id)
		{
			Offer offer = await offerRepository.FindByIdAsync(id);
			if (offer == null)
			{
				return NotFound();
			}

			return new ObjectResult(offer);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Offer offer)
		{
			if (offer == null)
			{
				return BadRequest();
			}

			offer.Code = Guid.NewGuid().ToString();

			if (offer.Seller == null || offer.Buyer == null)
			{
				return BadRequest();
			}

			Offer added = await offerRepository.CreateAsync(offer);
			return CreatedAtRoute("GetOffer", new {id = added.Id}, offer);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Offer offer)
		{
			if (offer == null || offer.Id != id)
			{
				return BadRequest();
			}

			Offer existing = await offerRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await offerRepository.UpdateAsync(offer);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Offer existing = await offerRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await offerRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}