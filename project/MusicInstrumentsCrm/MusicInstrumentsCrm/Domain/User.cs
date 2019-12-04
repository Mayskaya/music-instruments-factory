using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace MusicInstrumentsCrm.Domain
{
	public class User : IdentityUser
	{

		public DateTime CreationDate { get; set; }

		public DateTime? LastLogin { get; set; }

		public bool Active { get; set; }
	}
}