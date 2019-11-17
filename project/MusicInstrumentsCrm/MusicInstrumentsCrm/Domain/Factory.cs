using System;

namespace MusicInstrumentsCrm.Domain
{
	public class Factory
	{
		public int Id { get; set; }
		
		public string Name { get; set; }

		public Address Address { get; set; }

		public DateTime FoundationDate { get; set; }
	}
}