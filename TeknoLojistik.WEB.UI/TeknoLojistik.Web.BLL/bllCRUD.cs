using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
    public class bllCRUD : bllBase
    {
        public static Personel Getir(int? Id = null, TeknoLojistikContext ctx = null)
        {
            if (Id.HasValue)
                return dalCRUD.Getir(Id.Value, ctx);

            return new Personel();
        }

        /// <summary>
        /// Yeni kayıt ekleme metodunu çağıran metottur. Transaction ve istisna kontrolü yapar.
        /// </summary>
        public static int Ekle(Personel p)
        {
            using (var db = VeritabaniGetir())
            {
                var trns = db.Database.BeginTransaction();

                try
                {
                    var sonuc = Ekle(p, db);
                    trns.Commit();
                    return sonuc;
                }
                catch (Exception)
                {
                    trns.Rollback();
                    throw;
                }
            }
        }

        /// <summary>
        /// Kontroller sonrası DAL ile etkileşime giren ekle metodudur.
        /// </summary>
        public static int Ekle(Personel p, TeknoLojistikContext ctx)
        {
            var prs = Getir();

            prs.Ad = p.Ad;
            prs.Soyad = p.Soyad;
            prs.TCKimlikNo = p.KullaniciAd;
            prs.TelefonNo = p.TelefonNo;
            prs.Adres = p.Adres;

            return dalCRUD.Ekle(p, ctx);
        }

        public static int Sil(int Id)
        {
            try
            {
                return dalCRUD.Sil(Id);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public static int Guncelle(int Id)
        {
            try
            {
                return dalCRUD.Guncelle(Id);
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
