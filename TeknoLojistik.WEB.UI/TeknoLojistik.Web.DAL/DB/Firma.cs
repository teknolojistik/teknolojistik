using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    public class Firma
    {
        public int Id { get; set; }

        [StringLength(100)]
        public string Unvan { get; set; }

        [StringLength(50)]
        public string FirmaTip { get; set; }

        [StringLength(10)]
        public string VergiNo { get; set; }

        [StringLength(10)]
        public string Telefon { get; set; }

        [StringLength(500)]
        public string Adres { get; set; }

        [StringLength(10)]
        public string CariTip { get; set; }
        public float Borc { get; set; }
        public float Alacak { get; set; }
        public float Bakiye { get; set; }
    }
}
