using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.Web.BLL
{
    public class bllBase
    {
        internal static TeknoLojistikContext VeritabaniGetir()
        {
            return new TeknoLojistikContext();
        }
    }
}
