using Microsoft.EntityFrameworkCore.Migrations;

namespace ClassRoomAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LightConditions",
                columns: table => new
                {
                    LightId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Light = table.Column<int>(type: "int", nullable: false),
                    LightComment = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LightConditions", x => x.LightId);
                });

            migrationBuilder.CreateTable(
                name: "NoiseLevels",
                columns: table => new
                {
                    NoiseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Noise = table.Column<int>(type: "int", nullable: false),
                    NoiseComment = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NoiseLevels", x => x.NoiseId);
                });

            migrationBuilder.CreateTable(
                name: "Temperatures",
                columns: table => new
                {
                    TempId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Temp = table.Column<double>(type: "float", nullable: false),
                    TempComment = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Temperatures", x => x.TempId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LightConditions");

            migrationBuilder.DropTable(
                name: "NoiseLevels");

            migrationBuilder.DropTable(
                name: "Temperatures");
        }
    }
}
