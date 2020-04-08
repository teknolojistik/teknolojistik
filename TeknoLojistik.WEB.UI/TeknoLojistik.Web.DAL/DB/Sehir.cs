using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    public class Sehir
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Ad { get; set; }

        [StringLength(10)]
        public string Mernis { get; set; }
    }
}
