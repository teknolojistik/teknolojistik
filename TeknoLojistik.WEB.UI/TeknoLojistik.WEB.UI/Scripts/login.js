var Login = {

    Setup: function () {
        this.OturumAc();
    },

    OturumAc: function () {



        $("#btnGiris").click(function () {
            var kullaniciad = $("#txtKullaniciAd").val();
            var sifre = $("#txtSifre").val();
            var kullanici = {
                KullaniciAd: kullaniciad,
                Sifre: sifre
            }

            Giris(kullanici);
        })

        function Giris(data) {
            $.ajax({
                url: "/Services/Giris.asmx/OturumAc",
                data: JSON.stringify({ k: data }),
                method: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (o) {
                    console.log(o);
                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    }
}


