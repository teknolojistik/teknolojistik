using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
    public class bllCRUD
    {
        public static int Ekle(Personel p)
        {
            try
            {
                return dalCRUD.Ekle(p);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
