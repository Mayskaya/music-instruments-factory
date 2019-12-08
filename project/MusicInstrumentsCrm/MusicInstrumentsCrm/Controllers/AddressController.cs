
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
	public class AddressController : Controller
	{
		private readonly IAddressRepository addressRepository;

		public AddressController(IAddressRepository addressRepository)
		{
			this.addressRepository = addressRepository;
		}


		[HttpGet]
		public async Task<IEnumerable<Address>> GetAddresses()
		{
			return await addressRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetAddress")]
		public async Task<IActionResult> GetAddress(int id)
		{
			Address address = await addressRepository.FindByIdAsync(id);
			if (address == null)
			{
				return NotFound();
			}

			return new ObjectResult(address);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Address address)
		{
			if (address == null)
			{
				return BadRequest();
			}

			if (address.FullAddress == null)
			{
				return BadRequest();
			}

			Address added = await addressRepository.CreateAsync(address);
			return CreatedAtRoute("GetAddress", new {id = added.Id}, address);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Address address)
		{
			if (address == null || address.Id != id)
			{
				return BadRequest();
			}

			Address existing = await addressRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await addressRepository.UpdateAsync(address);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Address existing = await addressRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await addressRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}