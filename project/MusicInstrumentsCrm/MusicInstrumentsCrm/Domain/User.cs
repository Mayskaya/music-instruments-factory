using System;

namespace MusicInstrumentsCrm.Domain
{
	public class User
	{
		public int Id { get; set; }

		public string Login { get; set; }

		public string Password { get; set; }

		public DateTime CreationDate { get; set; }

		public DateTime LastLogin { get; set; }

		public bool Active { get; set; }
	}
}