using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    [Serializable]
    [Table("Personeller")]
    public class Personel
    {
        public int Id { get; set; }
        public int KullaniciTip { get; set; }
        [StringLength(11)]
        public string TCKimlikNo { get; set; }

        [StringLength(100)]
        public string Ad { get; set; }

        [StringLength(100)]
        public string Soyad { get; set; }

        [StringLength(10)]
        public string TelefonNo { get; set; }

        [StringLength(500)]
        public string Adres { get; set; }
        public int DepartmanId { get; set; }

        [StringLength(17)]
        public string KullaniciAd { get; set; }

        [StringLength(12)]
        public string Sifre { get; set; }
    }
}
