using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("crmuser", Schema = "public")]
	public class User
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("login")]
		public string Login { get; set; }

		[Column("password")]
		public string Password { get; set; }

		[Column("creation_date")]
		public DateTime CreationDate { get; set; }

		[Column("last_login")]
		public DateTime LastLogin { get; set; }

		[Column("active")]
		public bool Active { get; set; }
	}
}