namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PersonelTablo : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Personels", newName: "Personeller");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Personeller", newName: "Personels");
        }
    }
}
