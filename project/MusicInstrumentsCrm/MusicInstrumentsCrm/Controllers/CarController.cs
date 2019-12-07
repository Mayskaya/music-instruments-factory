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
	public class CarController : Controller
	{
		private readonly ICarRepository carRepository;

		public CarController(ICarRepository carRepository)
		{
			this.carRepository = carRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Car>> GetCars()
		{
			return await carRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetCar")]
		public async Task<IActionResult> GetCar(int id)
		{
			Car car = await carRepository.FindByIdAsync(id);
			if (car == null)
			{
				return NotFound();
			}

			return new ObjectResult(car);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Car car)
		{
			if (car == null)
			{
				return BadRequest();
			}

			if (car.Serial == null
			    || car.Model == null
			    || car.Region == null)
			{
				return BadRequest();
			}

			Car added = await carRepository.CreateAsync(car);
			return CreatedAtRoute("GetCar", new {id = added.Id}, car);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Car car)
		{
			if (car == null || car.Id != id)
			{
				return BadRequest();
			}

			Car existing = await carRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await carRepository.UpdateAsync(car);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Car existing = await carRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await carRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}