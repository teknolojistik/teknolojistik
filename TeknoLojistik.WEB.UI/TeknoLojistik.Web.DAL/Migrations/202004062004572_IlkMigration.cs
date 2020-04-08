namespace TeknoLojistik.Web.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IlkMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Araclar",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Plaka = c.String(maxLength: 9),
                        Plaka2 = c.String(maxLength: 9),
                        Marka = c.String(maxLength: 50),
                        Model = c.String(maxLength: 50),
                        Yil = c.String(maxLength: 4),
                        Kapasite = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Firmalar",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Unvan = c.String(maxLength: 100),
                        FirmaTip = c.String(maxLength: 50),
                        VergiNo = c.String(maxLength: 10),
                        Telefon = c.String(maxLength: 10),
                        Adres = c.String(maxLength: 500),
                        CariTip = c.String(maxLength: 10),
                        Borc = c.Single(nullable: false),
                        Alacak = c.Single(nullable: false),
                        Bakiye = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Personeller",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TCKimlikNo = c.String(maxLength: 11),
                        Ad = c.String(maxLength: 100),
                        Soyad = c.String(maxLength: 100),
                        TelefonNo = c.String(maxLength: 10),
                        Adres = c.String(maxLength: 500),
                        DepartmanId = c.Int(nullable: false),
                        KullaniciAd = c.String(maxLength: 17),
                        Sifre = c.String(maxLength: 12),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Talepler",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirmaId = c.Int(nullable: false),
                        PersonelId = c.Int(nullable: false),
                        AracId = c.Int(nullable: false),
                        EklemeTarihi = c.DateTime(nullable: false),
                        YuklemeTarihi = c.DateTime(nullable: false),
                        TeslimatTarihi = c.DateTime(nullable: false),
                        YuklemeIl = c.Int(nullable: false),
                        YuklemeIlce = c.Int(nullable: false),
                        TeslimatIl = c.Int(nullable: false),
                        TeslimatIlce = c.Int(nullable: false),
                        YukBirim = c.String(maxLength: 10),
                        YukCins = c.String(maxLength: 50),
                        YukMiktar = c.Byte(nullable: false),
                        TasimaBedeli = c.Single(nullable: false),
                        KomisyonBedeli = c.Single(nullable: false),
                        KDV = c.Byte(nullable: false),
                        SevkiyatDurumu = c.String(maxLength: 20),
                        IslenmeDurumu = c.String(maxLength: 20),
                        YetkiliNotu = c.String(maxLength: 100),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Talepler");
            DropTable("dbo.Personeller");
            DropTable("dbo.Firmalar");
            DropTable("dbo.Araclar");
        }
    }
}
