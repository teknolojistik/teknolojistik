var Login = function () {
    function Giris() {
        $.ajax({
            type: "post",
            url: "/Login.asmx/HelloWorld",
            data: "toçe",
            success: function (e) {
                console.log(e);
            }
        })
    }

    return {
        giris: Giris
    }
}

//var Login = {

//    Giris: function () {

//        console.log("eee");

//        function giris() {
//            $.ajax({
//                method: "post",
//                url: "/Login.asmx/HelloWorld",
//                data: "Toçe",
//                success: function (e) {
//                    console.log(e);
//                }
//            })
//        }

//    },

//    Ekle: function () {

//    },

//    Sil: function () {

//    },

//    Yetki: function () {

//    },
//}


//$(document).ready(function () {
//    $("#loginForm").submit(function (e) {
//        e.preventDefault();
//        if ($("#txtKullaniciAdi").val() != '' && $("#txtSifre").val() != '') {
//            if ($("#txtKullaniciAdi").val() == 'Admin' && $("#txtSifre").val() == '123') {
//                alert('Giriş Yapıldı');
//            } else {
//                alert('Kullanıcı Adı Şifre Hatalı');
//            }
//        } else {
//            alert('Boş Alanları Doldur');
//        }
//    });
//});


