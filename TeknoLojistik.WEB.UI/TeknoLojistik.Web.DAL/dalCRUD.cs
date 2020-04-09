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
        public static int Ekle(Personel p)
        {
            try
            {
                TeknoLojistikContext ctx = new TeknoLojistikContext();
                ctx.Personeller.Add(p);
                return ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
