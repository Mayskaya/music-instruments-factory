using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("buyer")]
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

		[ForeignKey("crm_user")]
		public virtual User User { get; set; }
	}
}