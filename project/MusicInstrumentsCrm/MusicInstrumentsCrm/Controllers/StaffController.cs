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
	public class StaffController : Controller
	{
		private readonly IStaffRepository staffRepository;

		public StaffController(IStaffRepository staffRepository)
		{
			this.staffRepository = staffRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<Staff>> GetStaffs()
		{
			return await staffRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetStaff")]
		public async Task<IActionResult> GetStaff(int id)
		{
			Staff staff = await staffRepository.FindByIdAsync(id);
			if (staff == null)
			{
				return NotFound();
			}

			return new ObjectResult(staff);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Staff staff)
		{
			if (staff == null)
			{
				return BadRequest();
			}

			Staff added = await staffRepository.CreateAsync(staff);
			if (staff.FirstName == null 
			    || staff.LastName == null
			    || staff.Patronymic == null
			    || staff.PassportSerial == null
			    || staff.PassportNumber == null
			    || staff.Phone == null
			    || staff.Inn == null
			    || staff.Snils == null 
			    || staff.User == null)
			{
				return BadRequest();
			}

			return CreatedAtRoute("GetStaff", new {id = added.Id}, staff);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] Staff staff)
		{
			if (staff == null || staff.Id != id)
			{
				return BadRequest();
			}

			Staff existing = await staffRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await staffRepository.UpdateAsync(staff);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			Staff existing = await staffRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await staffRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}