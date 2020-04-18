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
                    if (o.d)
                        Genel.Admin = 1;

                    else
                        Genel.Admin = 0;

                    window.location.href = "/pages/anasayfa.aspx";
                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    }
}


