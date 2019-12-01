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
		public int MyId { get; set; }

	}
}