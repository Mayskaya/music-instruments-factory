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
	public class SupplyInStoreController : Controller
	{
		private readonly ISupplyInStoreRepository supplyInStoreRepository;

		public SupplyInStoreController(ISupplyInStoreRepository supplyInStoreRepository)
		{
			this.supplyInStoreRepository = supplyInStoreRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<SupplyInStore>> GetSupplyInStores()
		{
			return await supplyInStoreRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetSupplyInStore")]
		public async Task<IActionResult> GetSupplyInStore(int id)
		{
			SupplyInStore supplyInStore = await supplyInStoreRepository.FindByIdAsync(id);
			if (supplyInStore == null)
			{
				return NotFound();
			}

			return new ObjectResult(supplyInStore);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] SupplyInStore supplyInStore)
		{
			if (supplyInStore == null)
			{
				return BadRequest();
			}

			if (supplyInStore.Good == null || supplyInStore.Store == null)
			{
				return BadRequest();
			}

			SupplyInStore added = await supplyInStoreRepository.CreateAsync(supplyInStore);
			return CreatedAtRoute("GetSupplyInStore", new {id = added.Id}, supplyInStore);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] SupplyInStore supplyInStore)
		{
			if (supplyInStore == null || supplyInStore.Id != id)
			{
				return BadRequest();
			}

			SupplyInStore existing = await supplyInStoreRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await supplyInStoreRepository.UpdateAsync(supplyInStore);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			SupplyInStore existing = await supplyInStoreRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await supplyInStoreRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}