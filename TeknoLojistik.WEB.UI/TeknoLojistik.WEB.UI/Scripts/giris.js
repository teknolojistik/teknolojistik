var Giris = {

    Setup: function () {

        this.OturumAc();

    },

    OturumAc: function () {

        $("#window").kendoWindow(
            {
                title: "GİRİŞ",
                height: 350,
                width: 400,
                modal: true,
                animation: {
                    open: {
                        effects: "fade:in"
                    }
                },
                close: {
                    duration: 2000
                },
                visible: false,
                zIndex: 99
            }).data("kendoWindow").center().open();

        $("#btnGiris").click(function () {
            $("#yukleniyor").show();
            var kullaniciad = $("#txtKullanici").val();
            var sifre = $("#txtSifre").val();
            var kullanici = {
                KullaniciAd: kullaniciad,
                Sifre: sifre
            }

            if (kullanici.KullaniciAd == '' || kullanici.Sifre == '') {
                $("#yukleniyor").hide();
                return kendo.alert("Boşlukları doldurun!");
            }

            Giris(kullanici);
        });

        $("#txtSifre").keyup(function (e) {
            if (e.keyCode === 13) {
                $("#yukleniyor").show();
                var kullaniciad = $("#txtKullanici").val();
                var sifre = $("#txtSifre").val();
                var kullanici = {
                    KullaniciAd: kullaniciad,
                    Sifre: sifre
                }

                if (kullanici.KullaniciAd == '' || kullanici.Sifre == '') {
                    $("#yukleniyor").hide();
                    return kendo.alert("Boşlukları doldurun!");
                }

                Giris(kullanici);
            }
        });

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
                    $("#yukleniyor").hide();
                    if (sonuc != null) {
                        if (sonuc.Admin)
                            window.location.href = "/Pages/Anasayfa/Admin.aspx";

                        else
                            window.location.href = "/Pages/Anasayfa/Personel.aspx";
                    }
                    else {
                        kendo.alert("Kullanıcı adı veya şifre hatalı!");

                        setTimeout(function () {
                            window.location.href = "/Pages/Giris.aspx";
                        }, 2000);
                    }
                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    }
}