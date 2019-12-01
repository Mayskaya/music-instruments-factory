using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Factory")]
	public class Factory
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }
		
		[Column("name")]
		public string Name { get; set; }

		[ForeignKey("address")]
		public virtual Address Address { get; set; }

		[Column("foundation_date")]
		public DateTime FoundationDate { get; set; }
	}
}