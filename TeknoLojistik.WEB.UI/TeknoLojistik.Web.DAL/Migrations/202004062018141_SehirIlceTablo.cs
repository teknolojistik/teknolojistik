namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class SehirIlceTablo : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ilceler",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    Ad = c.String(maxLength: 100),
                    SehirId = c.Int(nullable: false),
                    Mernis = c.String(maxLength: 10),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "dbo.Sehirler",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    Ad = c.String(maxLength: 50),
                    Mernis = c.String(maxLength: 10),
                })
                .PrimaryKey(t => t.Id);

        }

        public override void Down()
        {
            DropTable("dbo.Sehirler");
            DropTable("dbo.Ilceler");
        }
    }
}
