using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.DAL
{
    public class dalGenel
    {
        public static List<Sehir> ilListele()
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();

            List<Sehir> lst = ctx.Sehirler.ToList();

            return lst;
        }

        public static List<Ilce> ilceListele(int sehirId)
        {
            TeknoLojistikContext ctx = new TeknoLojistikContext();

            List<Ilce> lst = ctx.Ilceler.Where<Ilce>(o => o.SehirId == sehirId).ToList();

            return lst;
        }
    }
}
