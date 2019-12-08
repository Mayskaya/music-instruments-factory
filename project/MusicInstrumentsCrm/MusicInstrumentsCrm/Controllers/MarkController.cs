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
	public class MarkController : Controller
	{
		private readonly IMarkRepository markRepository;

		public MarkController(IMarkRepository markRepository)
		{
			this.markRepository = markRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Mark>> GetMarks()
		{
			return await markRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetMark")]
		public async Task<IActionResult> GetMark(int id)
		{
			Mark mark = await markRepository.FindByIdAsync(id);
			if (mark == null)
			{
				return NotFound();
			}

			return new ObjectResult(mark);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Mark mark)
		{
			if (mark == null)
			{
				return BadRequest();
			}

			if (mark.Name == null
			    || mark.Country == null)
			{
				return BadRequest();
			}

			Mark added = await markRepository.CreateAsync(mark);
			return CreatedAtRoute("GetMark", new {id = added.Id}, mark);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Mark mark)
		{
			if (mark == null || mark.Id != id)
			{
				return BadRequest();
			}

			Mark existing = await markRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await markRepository.UpdateAsync(mark);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Mark existing = await markRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await markRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}