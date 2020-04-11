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
        public static bool OturumAc(Kullanici k)
        {
            try
            {
                TeknoLojistikContext ctx = new TeknoLojistikContext();

                var sonuc = ctx.Kullanicilar.Where(o => o.KullaniciAd == k.KullaniciAd && o.Sifre == k.Sifre).FirstOrDefault();

                if (sonuc != null)
                    return true;

                else
                    return false;

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
