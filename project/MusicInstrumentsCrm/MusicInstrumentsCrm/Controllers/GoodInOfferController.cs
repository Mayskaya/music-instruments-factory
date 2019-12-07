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
	public class GoodInOfferController : Controller
	{
		private readonly IGoodInOfferRepository goodInOfferRepository;

		public GoodInOfferController(IGoodInOfferRepository goodInOfferRepository)
		{
			this.goodInOfferRepository = goodInOfferRepository;
		}


		[HttpGet]
		public async Task<IEnumerable<GoodInOffer>> GetGoodInOffers()
		{
			return await goodInOfferRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetGoodInOffer")]
		public async Task<IActionResult> GetGoodInOffer(int id)
		{
			GoodInOffer goodInOffer = await goodInOfferRepository.FindByIdAsync(id);
			if (goodInOffer == null)
			{
				return NotFound();
			}

			return new ObjectResult(goodInOffer);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] GoodInOffer goodInOffer)
		{
			if (goodInOffer == null)
			{
				return BadRequest();
			}

			if (goodInOffer.Good == null || goodInOffer.Offer == null)
			{
				return BadRequest();
			}

			GoodInOffer added = await goodInOfferRepository.CreateAsync(goodInOffer);
			return CreatedAtRoute("GetGoodInOffer", new {id = added.Id}, goodInOffer);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] GoodInOffer goodInOffer)
		{
			if (goodInOffer == null || goodInOffer.Id != id)
			{
				return BadRequest();
			}

			GoodInOffer existing = await goodInOfferRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await goodInOfferRepository.UpdateAsync(goodInOffer);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			GoodInOffer existing = await goodInOfferRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await goodInOfferRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}