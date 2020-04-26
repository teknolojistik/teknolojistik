using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
    public class bllArac
    {
        public static List<Arac> Listele()
        {
            try
            {
                return dalArac.Listele();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static bool Ekle(Arac a)
        {
            try
            {
                return dalArac.Ekle(a);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static int Sil(int a)
        {
            try
            {
                return dalArac.Sil(a);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
