var CRUD = {

    Ekle: function () {
        var data = { TCKimlikNo: "17171717171", Ad: "Salah", Soyad: "Gel", TelefonNo: "1111111111", Adres: "Yoh", DepartmanId: 12, KullaniciAd: "glory", Sifre: "17" };

        $.ajax({
            url: "/CRUD.asmx/Ekle",
            data: JSON.stringify({ p: data }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            method: "post",
            success: function (o) {
                console.log(o);
            },
            error: function (o) {
                console.log(o);
            }
        })
    },

    Sil: function () {

    },

    Guncelle: function () {

    },

    Listele: function () {

    }
}