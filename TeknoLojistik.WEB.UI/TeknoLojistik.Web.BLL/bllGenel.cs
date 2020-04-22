using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
    public class bllGenel
    {
        public static List<Sehir> ilListele()
        {
            return dalGenel.ilListele();
        }

        public static List<Ilce> ilceListele(int sehirId)
        {
            return dalGenel.ilceListele(sehirId);
        }
    }
}
