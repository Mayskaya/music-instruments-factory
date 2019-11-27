using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("staff")]
	public class Staff
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

		[Column("passport_serial")]
		public string PassportSerial { get; set; }

		[Column("passport_number")]
		public string PassportNumber { get; set; }

		[Column("phone")]
		public string Phone { get; set; }

		[Column("inn")]
		public string Inn { get; set; }

		[Column("snils")]
		public string Snils { get; set; }

		[ForeignKey("crm_user")]
		public virtual User User { get; set; }
	}
}