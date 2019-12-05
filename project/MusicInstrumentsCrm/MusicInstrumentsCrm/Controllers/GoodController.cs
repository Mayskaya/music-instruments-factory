using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MusicInstrumentsCrm.Domain;
using MusicInstrumentsCrm.Repositories;

namespace MusicInstrumentsCrm.Controllers
{
	[Route("api/v1/[controller]")]
	[AllowAnonymous]
	public class GoodController : Controller
	{
		private readonly IGoodRepository goodRepository;

		public GoodController(IGoodRepository goodRepository)
		{
			this.goodRepository = goodRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Good>> GetGoods()
		{
			return await goodRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetGood")]
		public async Task<IActionResult> GetGood(int id)
		{
			Good good = await goodRepository.FindByIdAsync(id);
			if (good == null)
			{
				return NotFound();
			}

			return new ObjectResult(good);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Good good)
		{
			if (good == null)
			{
				return BadRequest();
			}

			if (good.Name == null || good.GoodType == null || good.Factory == null)
			{
				return BadRequest();
			}

			Good added = await goodRepository.CreateAsync(good);
			return CreatedAtRoute("GetGood", new {id = added.Id}, good);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Good good)
		{
			if (good == null || good.Id != id)
			{
				return BadRequest();
			}

			Good existing = await goodRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await goodRepository.UpdateAsync(good);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Good existing = await goodRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await goodRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}
			else
			{
				return BadRequest();
			}
		}
	}
}