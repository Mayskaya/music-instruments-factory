namespace MusicInstrumentsCrm.Domain
{
	public class Staff
	{
		public int Id { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		public string Patronymic { get; set; }

		public string PassportSerial { get; set; }

		public string PassportNumber { get; set; }

		public string Phone { get; set; }

		public string Inn { get; set; }

		public string Snils { get; set; }

		public User User { get; set; }
	}
}