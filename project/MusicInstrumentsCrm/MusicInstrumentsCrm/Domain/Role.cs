using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Role")]
	public class Role
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }
		
		[Column("name")]
		public string Name { get; set; }
		
		[NotMapped]
		public virtual ICollection<Permission> Permissions { get; set; }
	}
}