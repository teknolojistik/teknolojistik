using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using TeknoLojistik.Web.BLL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.WEB.UI.Services
{
    /// <summary>
    /// Summary description for srvArac
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService()]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class srvArac : System.Web.Services.WebService
    {

        [WebMethod]
        public List<Arac> Listele()
        {
            return bllArac.Listele();
        }

        [WebMethod]
        public bool Ekle(Arac a)
        {
            return bllArac.Ekle(a);
        }
    }
}
