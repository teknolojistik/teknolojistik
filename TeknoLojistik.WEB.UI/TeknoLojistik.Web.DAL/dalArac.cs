using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.DAL
{
    public class dalArac
    {
        public static List<Arac> Listele()
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();

            List<Arac> lst = ctx.Araclar.ToList();

            return lst;
        }

        public static bool Ekle(Arac a)
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();

            ctx.Araclar.Add(a);
            var sonuc = ctx.SaveChanges();
            if (sonuc > 0)
                return true;
            else
                return false;
        }



        public static int Sil(int id)
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();
            var sonuc = ctx.Araclar.Where(o => o.Id == id).FirstOrDefault();
            ctx.Araclar.Remove(sonuc);
            return ctx.SaveChanges();
        }
    }
}
