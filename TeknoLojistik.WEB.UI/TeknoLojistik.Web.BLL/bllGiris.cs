using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
    public static class bllGiris
    {
        public static Kullanici OturumAc(Kullanici k)
        {
            try
            {
                return dalGiris.OturumAc(k);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
