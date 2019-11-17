using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Repositories;


namespace MusicInstrumentsCrm.Controllers
{
	[Route("api/v1/[controller]")]
	public class BuyerController : Controller
	{
		private readonly IBuyerRepository buyerRepository;

		public BuyerController(IBuyerRepository buyerRepository)
		{
			this.buyerRepository = buyerRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Buyer>> GetBuyers()
		{
			return await buyerRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetBuyer")]
		public async Task<IActionResult> GetBuyer(int id)
		{
			Buyer buyer = await buyerRepository.FindByIdAsync(id);
			if (buyer == null)
			{
				return NotFound();
			}

			return new ObjectResult(buyer);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Buyer buyer)
		{
			if (buyer == null)
			{
				return BadRequest();
			}

			if (buyer.LastName == null || buyer.FirstName == null || buyer.Email == null)
			{
				return BadRequest();
			}

			Buyer added = await buyerRepository.CreateAsync(buyer);
			return CreatedAtRoute("GetBuyer", new {id = added.Id}, buyer);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Buyer buyer)
		{
			if (buyer == null || buyer.Id != id)
			{
				return BadRequest();
			}

			Buyer existing = await buyerRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await buyerRepository.UpdateAsync(buyer);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Buyer existing = await buyerRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await buyerRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}