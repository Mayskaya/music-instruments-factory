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
	public class ModelController : Controller
	{
		private readonly IModelRepository modelRepository;

		public ModelController(IModelRepository modelRepository)
		{
			this.modelRepository = modelRepository;
		}


		[HttpGet]
		public async Task<IEnumerable<Model>> GetModels()
		{
			return await modelRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetModel")]
		public async Task<IActionResult> GetModel(int id)
		{
			Model model = await modelRepository.FindByIdAsync(id);
			if (model == null)
			{
				return NotFound();
			}

			return new ObjectResult(model);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Model model)
		{
			if (model == null)
			{
				return BadRequest();
			}

			if (model.ModelName == null
			    || model.Mark == null)
			{
				return BadRequest();
			}

			Model added = await modelRepository.CreateAsync(model);
			return CreatedAtRoute("GetModel", new {id = added.Id}, model);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Model model)
		{
			if (model == null || model.Id != id)
			{
				return BadRequest();
			}

			Model existing = await modelRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await modelRepository.UpdateAsync(model);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Model existing = await modelRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await modelRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}