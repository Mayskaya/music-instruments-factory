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
	public class DeliveryController : Controller
	{
		private readonly IDeliveryRepository deliveryRepository;

		public DeliveryController(IDeliveryRepository deliveryRepository)
		{
			this.deliveryRepository = deliveryRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Delivery>> GetDeliveries()
		{
			return await deliveryRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetDelivery")]
		public async Task<IActionResult> GetDelivery(int id)
		{
			Delivery delivery = await deliveryRepository.FindByIdAsync(id);
			if (delivery == null)
			{
				return NotFound();
			}

			return new ObjectResult(delivery);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Delivery delivery)
		{
			if (delivery == null)
			{
				return BadRequest();
			}

			if (delivery.Address == null
			    || delivery.Car == null
			    || delivery.Courier == null)
			{
				return BadRequest();
			}

			Delivery added = await deliveryRepository.CreateAsync(delivery);
			return CreatedAtRoute("GetDelivery", new {id = added.Id}, delivery);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Delivery delivery)
		{
			if (delivery == null || delivery.Id != id)
			{
				return BadRequest();
			}

			Delivery existing = await deliveryRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await deliveryRepository.UpdateAsync(delivery);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Delivery existing = await deliveryRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await deliveryRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}