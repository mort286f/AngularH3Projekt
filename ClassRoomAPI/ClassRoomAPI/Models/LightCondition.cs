using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClassRoomAPI.Models
{
    // This class represents LightCondition!
    public class LightCondition
    {
        // The Key attribute is the PrimaryKey!
        [Key]
        public int LightId { get; set; }
        public int Light { get; set; }
        // Using the Required attribute to require that LightComment is not null!
        // Using the Column attritute to Specific a particular Typenamt  - in this case to be nvarchar(255)!
        [Required]
        [Column(TypeName = "nvarchar(255)")]
        public string LightComment { get; set; }
    }
}
