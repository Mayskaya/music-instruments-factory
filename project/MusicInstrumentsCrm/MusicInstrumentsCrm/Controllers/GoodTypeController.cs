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
	public class GoodTypeController : Controller
	{
		private readonly IGoodTypeRepository goodTypeRepository;

		public GoodTypeController(IGoodTypeRepository goodTypeRepository)
		{
			this.goodTypeRepository = goodTypeRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<GoodType>> GetGoodTypes()
		{
			return await goodTypeRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetGoodType")]
		public async Task<IActionResult> GetGoodType(int id)
		{
			GoodType goodType = await goodTypeRepository.FindByIdAsync(id);
			if (goodType == null)
			{
				return NotFound();
			}

			return new ObjectResult(goodType);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] GoodType goodType)
		{
			if (goodType == null)
			{
				return BadRequest();
			}

			if (goodType.TypeName == null)
			{
				return BadRequest();
			}

			GoodType added = await goodTypeRepository.CreateAsync(goodType);
			return CreatedAtRoute("GetGoodType", new {id = added.Id}, goodType);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] GoodType goodType)
		{
			if (goodType == null || goodType.Id != id)
			{
				return BadRequest();
			}

			GoodType existing = await goodTypeRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await goodTypeRepository.UpdateAsync(goodType);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			GoodType existing = await goodTypeRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await goodTypeRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}