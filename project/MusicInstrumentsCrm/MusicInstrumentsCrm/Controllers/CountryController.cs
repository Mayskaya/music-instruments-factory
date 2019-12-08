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
	public class CountryController : Controller
	{
		private readonly ICountryRepository countryRepository;

		public CountryController(ICountryRepository countryRepository)
		{
			this.countryRepository = countryRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Country>> GetCountrys()
		{
			return await countryRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetCountry")]
		public async Task<IActionResult> GetCountry(int id)
		{
			Country country = await countryRepository.FindByIdAsync(id);
			if (country == null)
			{
				return NotFound();
			}

			return new ObjectResult(country);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Country country)
		{
			if (country == null)
			{
				return BadRequest();
			}

			if (country.Name == null)
			{
				return BadRequest();
			}

			Country added = await countryRepository.CreateAsync(country);
			return CreatedAtRoute("GetCountry", new {id = added.Id}, country);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Country country)
		{
			if (country == null || country.Id != id)
			{
				return BadRequest();
			}

			Country existing = await countryRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await countryRepository.UpdateAsync(country);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Country existing = await countryRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await countryRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}