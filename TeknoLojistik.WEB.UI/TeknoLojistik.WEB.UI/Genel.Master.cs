using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TeknoLojistik.WEB.UI
{
    public partial class Genel : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                {
                    if (!(Session["oturum"] != null && (Boolean)Session["oturum"] == true))
                    {
                        Response.Redirect("Login.aspx");
                    }



                    if ((int)Session["tip"] == 0)
                    {
                        Panel1.Visible = true;
                        Panel2.Visible = false;
                        lblTip.Text = "Personel Girişi";


                    }

                    else if ((int)Session["tip"] == 1)
                    {
                        Panel1.Visible = false;
                        Panel2.Visible = true;

                        lblTip.Text = "Yönetici Girişi";
                    }

                    else
                    {
                        Response.Redirect("Giris.aspx");
                    }
                }
            }
        }
    }
    }
