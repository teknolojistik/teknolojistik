namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AracPlakaUzunluk : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Araclar", newName: "Araclar");
            AlterColumn("dbo.Araclar", "Plaka", c => c.String(maxLength: 15));
            AlterColumn("dbo.Araclar", "Plaka2", c => c.String(maxLength: 15));
            AlterColumn("dbo.Araclar", "Yil", c => c.String(maxLength: 10));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Araclar", "Yil", c => c.String(maxLength: 4));
            AlterColumn("dbo.Araclar", "Plaka2", c => c.String(maxLength: 9));
            AlterColumn("dbo.Araclar", "Plaka", c => c.String(maxLength: 9));
            RenameTable(name: "dbo.Araclar", newName: "Araclar");
        }
    }
}
