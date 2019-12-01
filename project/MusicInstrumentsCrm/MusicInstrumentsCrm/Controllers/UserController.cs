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
	public class UserController : Controller
	{
		private readonly IUserRepository userRepository;

		public UserController(IUserRepository userRepository)
		{
			this.userRepository = userRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<User>> GetUsers()
		{
			return await userRepository.FindAllAsync();
		}

		[HttpGet("{id}", Name = "GetUser")]
		public async Task<IActionResult> GetUser(int id)
		{
			User user = await userRepository.FindByIdAsync(id);
			if (user == null)
			{
				return NotFound();
			}

			return new ObjectResult(user);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] User user)
		{
			if (user == null)
			{
				return BadRequest();
			}

//			if (user.Password == null
//			    || user.Login == null)
//			{
//				return BadRequest();
//			}

			User added = await userRepository.CreateAsync(user);
			return CreatedAtRoute("GetUser", new {id = added.MyId}, user);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, [FromBody] User user)
		{
			if (user == null || user.MyId != id)
			{
				return BadRequest();
			}

			User existing = await userRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			await userRepository.UpdateAsync(user);
			return new OkResult();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			User existing = await userRepository.FindByIdAsync(id);
			if (existing == null)
			{
				return NotFound();
			}

			bool deleted = await userRepository.DeleteAsync(existing);
			if (deleted)
			{
				return new OkResult();
			}

			return BadRequest();
		}
	}
}