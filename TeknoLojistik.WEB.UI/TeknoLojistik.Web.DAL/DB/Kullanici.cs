using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    [Table("Kullanicilar")]
    public class Kullanici
    {
        public int Id { get; set; }
        public int KullaniciTip { get; set; }
        [StringLength(17)]
        public string KullaniciAd { get; set; }

        [StringLength(10)]
        public string Sifre { get; set; }
        public int PersonelId { get; set; }
        public DateTime IlkKayitTarihi { get; set; }
        public DateTime SonGirisTarihi { get; set; }
    }
}
