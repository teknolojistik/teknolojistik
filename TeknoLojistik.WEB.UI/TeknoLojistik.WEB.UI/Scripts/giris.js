var Giris = {

    Setup: function () {
        this.OturumAc();
    },

    OturumAc: function () {

        $("#btnGiris").click(function () {
            var kullaniciad = $("#txtEposta").val();
            var sifre = $("#txtSifre").val();
            var kullanici = {
                KullaniciAd: kullaniciad,
                Sifre: sifre
            }

            if (kullanici.KullaniciAd == '' || kullanici.Sifre == '')
                alert("Boşlukları doldurun!");

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
                    console.log("Giris metodu successe girdi.");
                    var sonuc = o.d;

                    if (sonuc != null) {
                        if (sonuc.Admin)
                            window.location.href = "/Pages/Admin.aspx";

                        else
                            window.location.href = "/Pages/Personel.aspx";
                    }
                    else {
                        alert("Kullanıcı adı veya şifre hatalı!");
                        window.location.href = "/Pages/Giris.aspx";
                    }
                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    }
}


