using System;
using Microsoft.AspNetCore.Identity;

namespace MusicInstrumentsCrm.Domain
{
	public class User : IdentityUser
	{
		public DateTime CreationDate { get; set; }

		public DateTime? LastLogin { get; set; }

		public bool Active { get; set; }
	}
}