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
	public class FactoryController : Controller
	{
		private readonly IFactoryRepository factoryRepository;

		public FactoryController(IFactoryRepository factoryRepository)
		{
			this.factoryRepository = factoryRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Factory>> GetFactories()
		{
			return await factoryRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetFactory")]
		public async Task<IActionResult> GetFactory(int id)
		{
			Factory factory = await factoryRepository.FindByIdAsync(id);
			if (factory == null)
			{
				return NotFound();
			}

			return new ObjectResult(factory);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Factory factory)
		{
			if (factory == null)
			{
				return BadRequest();
			}

			if (factory.Name == null || factory.Address == null)
			{
				return BadRequest();
			}

			Factory added = await factoryRepository.CreateAsync(factory);
			return CreatedAtRoute("GetFactory", new {id = added.Id}, factory);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Factory factory)
		{
			if (factory == null || factory.Id != id)
			{
				return BadRequest();
			}

			Factory existing = await factoryRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await factoryRepository.UpdateAsync(factory);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Factory existing = await factoryRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await factoryRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}