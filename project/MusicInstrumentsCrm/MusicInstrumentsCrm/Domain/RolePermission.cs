using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicInstrumentsCrm.Domain
{
	[Table("RolePermission")]
	public class RolePermission
	{
		[Column("id")]
		[Key]
		public int Id { get; set; }
		
		[ForeignKey("role")]
		public virtual Role Role { get; set; }
		
		[ForeignKey("permission")]
		public virtual Permission Permission { get; set; }
		
		[Column("value")]
		[Required]
		public string Value { get; set; }
		
		[Column("value_type")]
		[Required]
		public PermissionValueType ValueType { get; set; }
	}
	
	public enum PermissionValueType
	{
		Integer,
		Boolean,
		String,
		Double
	}
}