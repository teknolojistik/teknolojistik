using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    [Table("Araclar")]
    public class Arac
    {
        public int Id { get; set; }

        [StringLength(15)]
        public string Plaka { get; set; }

        [StringLength(15)]
        public string Plaka2 { get; set; }

        [StringLength(50)]
        public string Marka { get; set; }

        [StringLength(50)]
        public string Model { get; set; }

        [StringLength(10)]
        public string Yil { get; set; }
        public byte Kapasite { get; set; }

    }
}
