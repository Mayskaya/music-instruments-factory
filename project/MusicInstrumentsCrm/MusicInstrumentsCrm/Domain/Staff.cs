using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Staff")]
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

		[Column("user")]
		[JsonIgnore]
		public string UserId { get; set; }

		public virtual User User { get; set; }
	}
}