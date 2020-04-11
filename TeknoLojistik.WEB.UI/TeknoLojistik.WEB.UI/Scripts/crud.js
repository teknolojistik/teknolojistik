var CRUD = {

    Ekle: function () {
        var data = {
            TCKimlikNo: "17171717171",
            Ad: "Kel",
            Soyad: "Kafali",
            TelefonNo: "1111111111",
            Adres: "Yoh",
            DepartmanId: 12,
            KullaniciAd: "glory",
            Sifre: "17"
        };

        $.ajax({
            url: "/CRUD.asmx/Ekle",//metot hangi sayfada kullanılacaksa oraya git
            data: JSON.stringify({ p: data }),//post ise parametresi vardır. 
            contentType: "application/json; charset=utf-8",//içerik
            dataType: "json",//içerik veri tipi 
            method: "post",//post iişlemiyse post get işlemiyse get
            success: function (o) {//işlem başarılı olursa  şu şu işleri yap.
                console.log(o);
            },
            error: function (o) {//işlem başarısız olursa şu şu işleri yap.
                console.log(o);
            }
        })
    },
    
    Sil: function () {

        $.ajax({
            url: "/CRUD.asmx/Sil",//metot hangi sayfada kullanılacaksa oraya git
            data: {Id:1}, /*JSON.stringify*///post ise parametresi vardır. 
            /*contentType: "application/json; charset=utf-8",*///içerik
            /*dataType: "json",*///içerik veri tipi 
            method: "post",//post iişlemiyse post get işlemiyse get
            success: function (a) {//işlem başarılı olursa  şu şu işleri yap.
                console.log(a);
            },
            error: function (a) {//işlem başarısız olursa şu şu işleri yap.
                console.log(a);
            }
        })

    },

    Guncelle: function () {

    },

    Listele: function () {

    }
}