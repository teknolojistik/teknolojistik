var Muhasebe = {

    Setup: function () {
        this.ilListele();
    },

    ilListele: function () {

        var self = this;

        function DrpOlustur(veri) {
            $("#il").kendoDropDownList({
                dataTextField: "Ad",
                dataValueField: "Id",
                dataSource: veri,
                change: Degisim,
                optionLabel: "İl seçiniz",

                animation: {
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    }
                }
            });

            $("#ilce").kendoDropDownList({
                dataTextField: "Ad",
                dataValueField: "Id",
                optionLabel: "İlçe seçiniz",
                animation: {
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    }
                }
            })
        }

        function Degisim(e) {
            console.log("Seçim değişti!");
            var sonuc = e.sender;
            var seciliAd = sonuc.text();
            var seciliId = sonuc.value();

            self.ilceListele(seciliId);

        }

        $.ajax({
            url: "/Services/Genel.asmx/ilListele",
            method: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (o) {
                console.log("ilListele metodu successe girdi.");
                var sonuc = o.d;

                console.log(sonuc);
                DrpOlustur(sonuc);
            },
            error: function (o) {
                console.log(o);
            }
        })
    },

    ilceListele: function (sehirId) {

        function IlceDoldur(ilceListesi) {

            console.log(ilceListesi);
            var dataSource = new kendo.data.DataSource({
                data: ilceListesi
            })
            console.log(dataSource);

            var drp = $("#ilce").data("kendoDropDownList");
            drp.setDataSource(dataSource);
        }

        $.ajax({
            url: "/Services/Genel.asmx/ilceListele",
            method: "post",
            data: JSON.stringify({ sehirId: sehirId }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (o) {
                console.log("ilceListele metodu successe girdi.");
                var sonuc = o.d;

                console.log(sonuc);

                var ilceListesi = sonuc;

                if (ilceListesi != null && ilceListesi.length > 0) {
                    IlceDoldur(ilceListesi);
                }
            },
            error: function (o) {
                console.log(o);
            }
        })

    }

}