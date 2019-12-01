using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace MusicInstrumentsCrm.Domain
{
	[Table("CrmUser")]
	public class User 
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("login")]
		public string Login { get; set; }

		[Column("password")]
		[JsonIgnore]
		public string Password { get; set; }

		[Column("creation_date")]
		public DateTime CreationDate { get; set; }

		[Column("last_login")]
		public DateTime LastLogin { get; set; }

		[Column("active")]
		public bool Active { get; set; }
		
		[ForeignKey("role")]
		[JsonIgnore]
		public virtual Role Role { get; set; }
	}
}