using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("Permission")]
	public class Permission
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }
		
		[Column("name")]
		[Required]
		public string Name { get; set; }
		
		[NotMapped]
		public virtual ICollection<Role> Roles { get; set; }
	}
	
}