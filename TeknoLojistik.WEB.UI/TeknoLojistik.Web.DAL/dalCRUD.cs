using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.DAL
{
    public class dalCRUD
    {
        public static Personel Getir(int Id, TeknoLojistikContext ctx)
        {
            var sonuc = ctx.Personeller.Where(p => p.Id == Id).FirstOrDefault();
            return sonuc;
        }
        public static int Ekle(Personel p, TeknoLojistikContext ctx)
        {
            try
            {
                ctx.Personeller.Add(p);
                return ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

        }
        public static int Sil(int Id)
        {
            try
            {
                TeknoLojistikContext ctx = new TeknoLojistikContext();
                var sonuc = ctx.Personeller.Where(o => o.Id == Id).FirstOrDefault();
                ctx.Personeller.Remove(sonuc);
                return ctx.SaveChanges();
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
                TeknoLojistikContext ctx = new TeknoLojistikContext();

                var deger = ctx.Personeller.Where(o => o.Id == Id).SingleOrDefault();
                ctx.Personeller.Find(deger);

                //var deger = ctx.Personeller.First<Personel>();
                //deger.Ad = "EDAG";
                return ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
