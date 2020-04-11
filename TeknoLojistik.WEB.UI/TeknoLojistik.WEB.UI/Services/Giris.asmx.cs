using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using TeknoLojistik.Web.BLL;
using TeknoLojistik.Web.DAL.DB;

namespace TeknoLojistik.WEB.UI
{
    /// <summary>
    /// Summary description for Login
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService()]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Giris : System.Web.Services.WebService
    {

        [WebMethod]
        public bool OturumAc(Kullanici k)
        {
            return bllGiris.OturumAc(k);
        }
    }
}
