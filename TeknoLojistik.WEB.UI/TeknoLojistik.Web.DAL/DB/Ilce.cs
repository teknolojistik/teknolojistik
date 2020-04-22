using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    [Table("Ilceler")]
    public class Ilce
    {
        public int Id { get; set; }

        [StringLength(100)]
        public string Ad { get; set; }
        public int SehirId { get; set; }

        [StringLength(10)]
        public string Mernis { get; set; }
    }
}
