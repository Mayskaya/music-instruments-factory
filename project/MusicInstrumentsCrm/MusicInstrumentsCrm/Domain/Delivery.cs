namespace MusicInstrumentsCrm.Domain
{
	public class Delivery
	{
		public int Id { get; set; }

		public Car Car { get; set; }

		public Address Address { get; set; }

		public Staff Courier { get; set; }
	}
}