namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IlceAdDuzenleme : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Ilceler", newName: "Ilceler");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Ilceler", newName: "Ilceler");
        }
    }
}
