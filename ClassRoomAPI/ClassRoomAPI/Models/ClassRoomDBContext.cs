using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClassRoomAPI.Models
{
    // This class represents ClassRoomDBContext with inheritance from DbContext!
    public class ClassRoomDBContext : DbContext
    {
        public ClassRoomDBContext(DbContextOptions<ClassRoomDBContext> options): base(options)
        {

        }

        // Properties to be tables in the database!
        public DbSet<LightCondition> LightConditions { get; set; }
        public DbSet<NoiseLevel> NoiseLevels { get; set; }
        public DbSet<Temperature> Temperatures { get; set; }
    }
}
