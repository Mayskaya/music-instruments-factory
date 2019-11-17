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
	public class StoreController : Controller
	{
		private readonly IStoreRepository storeRepository;

		public StoreController(IStoreRepository storeRepository)
		{
			this.storeRepository = storeRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Store>> GetStores()
		{
			return await storeRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetStore")]
		public async Task<IActionResult> GetStore(int id)
		{
			Store store = await storeRepository.FindByIdAsync(id);
			if (store == null)
			{
				return NotFound();
			}

			return new ObjectResult(store);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Store store)
		{
			if (store == null)
			{
				return BadRequest();
			}

			if (store.Name == null || store.Address == null )
			{
				return BadRequest();
			}

			Store added = await storeRepository.CreateAsync(store);
			return CreatedAtRoute("GetStore", new {id = added.Id}, store);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Store store)
		{
			if (store == null || store.Id != id)
			{
				return BadRequest();
			}

			Store existing = await storeRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await storeRepository.UpdateAsync(store);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Store existing = await storeRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await storeRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}