using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Buyer")]
	public class Buyer
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }

		[Column("first_name")]
		public string FirstName { get; set; }

		[Column("last_name")]
		public string LastName { get; set; }

		[Column("patronymic")]
		public string Patronymic { get; set; }

		[Column("email")]
		public string Email { get; set; }

		[Column("phone")]
		public string Phone { get; set; }

		[Column("user")]
		public string? UserId { get; set; }
		
		public virtual User User { get; set; }

		public virtual IList<Offer> Offers { get; set; }
	}
}