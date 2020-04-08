using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    public class Arac
    {
        public int Id { get; set; }

        [StringLength(9)]
        public string Plaka { get; set; }

        [StringLength(9)]
        public string Plaka2 { get; set; }

        [StringLength(50)]
        public string Marka { get; set; }

        [StringLength(50)]
        public string Model { get; set; }

        [StringLength(4)]
        public string Yil { get; set; }
        public byte Kapasite { get; set; }

    }
}
