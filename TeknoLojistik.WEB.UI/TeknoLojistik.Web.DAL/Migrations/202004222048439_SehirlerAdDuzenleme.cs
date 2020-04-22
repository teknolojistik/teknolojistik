namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SehirlerAdDuzenleme : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Sehirler", newName: "Sehirler");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Sehirler", newName: "Sehirs");
        }
    }
}
