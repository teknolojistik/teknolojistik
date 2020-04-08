using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeknoLojistik.Web.DAL.DB
{
    public class Talep
    {
        public int Id { get; set; }
        public int FirmaId { get; set; }
        public int PersonelId { get; set; }
        public int AracId { get; set; }
        public DateTime EklemeTarihi { get; set; }
        public DateTime YuklemeTarihi { get; set; }
        public DateTime TeslimatTarihi { get; set; }
        public int YuklemeIl { get; set; }
        public int YuklemeIlce { get; set; }
        public int TeslimatIl { get; set; }
        public int TeslimatIlce { get; set; }

        [StringLength(10)]
        public string YukBirim { get; set; }

        [StringLength(50)]
        public string YukCins { get; set; }
        public byte YukMiktar { get; set; }
        public float TasimaBedeli { get; set; }
        public float KomisyonBedeli { get; set; }
        public byte KDV { get; set; }

        [StringLength(20)]
        public string SevkiyatDurumu { get; set; }

        [StringLength(20)]
        public string IslenmeDurumu { get; set; }

        [StringLength(100)]
        public string YetkiliNotu { get; set; }
    }
}
