using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.DAL
{
    public class dalGiris
    {
        public static Kullanici OturumAc(Kullanici k)
        {
            try
            {
                TeknoLojistikContext ctx = new TeknoLojistikContext();

                var sonuc = ctx.Kullanicilar.Where(o => o.KullaniciAd == k.KullaniciAd && o.Sifre == k.Sifre).FirstOrDefault();

                return sonuc;

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
