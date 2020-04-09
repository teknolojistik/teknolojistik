﻿using Newtonsoft.Json;
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
    /// Summary description for CRUD
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CRUD : System.Web.Services.WebService
    {

        [WebMethod]
        public int Ekle(Personel p)
        {
            //Personel prs = JsonConvert.DeserializeObject<Personel>(p);
            return bllCRUD.Ekle(p);
        }
    }
}
