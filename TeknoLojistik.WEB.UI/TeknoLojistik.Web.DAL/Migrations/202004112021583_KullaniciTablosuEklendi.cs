namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class KullaniciTablosuEklendi : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Kullanicilar",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        KullaniciAd = c.String(maxLength: 17),
                        Sifre = c.String(maxLength: 10),
                        PersonelId = c.Int(nullable: false),
                        IlkKayitTarihi = c.DateTime(nullable: false),
                        SonGirisTarihi = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Kullanicilar");
        }
    }
}
