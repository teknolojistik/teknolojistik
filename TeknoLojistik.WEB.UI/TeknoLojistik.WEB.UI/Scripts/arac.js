var Arac = {

    Setup: function () {
        this.GridOlustur();
        this.Ekle();
        this.Sil();
    },

    GridOlustur: function () {

        var self = this;

        $.ajax({
            url: "/Services/srvArac.asmx/Listele",
            method: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (o) {
                console.log("Araç grid oluştur metodu successe girdi.");
                var sonuc = o.d;
                $("#yukleniyor").hide();
                var ds = new kendo.data.DataSource({
                    data: sonuc
                });

                Grid(ds);
            },
            error: function (o) {
                console.log(o);
            }
        });

        function Grid(ds) {
            console.log("Arac")
            $("#grid").kendoGrid({
                dataSource: ds,
                height: "100%",
                groupable: true,
                sortable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columns: [
                    {
                        field: "Plaka",
                        height: 100,
                        title: "Plaka"
                    },
                    {
                        field: "Plaka2",
                        height: 100,
                        title: "Plaka 2"
                    },
                    {
                        field: "Marka",
                        height: 100,
                        title: "Marka"
                    },
                    {
                        field: "Model",
                        height: 100,
                        title: "Model"
                    },
                    {
                        field: "Yil",
                        height: 100,
                        title: "Yıl"
                    },
                    {
                        field: "Kapasite",
                        height: 100,
                        title: "Kapasite"
                    },
                    {
                        command: [{
                            className: "btn-destroy", name: "destroy", text: "Remove", style="color: red;" }]
                    
                    }
                ],
                editable: true,
            });
        }
    },

    Ekle: function () {

        var self = this;

        $("#btnEkle").click(function () {
            var win = $("#window").kendoWindow({
                title: "Ekle",
                height: 350,
                width: 400,
                content: "/View/Arac/Ekle.html",
                modal: true,
                animation: {
                    open: {
                        effects: "fade:in"
                    }
                },
                open: function () {
                },
                zIndex: 99
            }).data("kendoWindow").center();

            win.element.on("click", "#btnKaydet", function () {
                Ekle();
            });
        })

        function Ekle() {
            var data = {
                Plaka: $("#txtPlaka").val(),
                Plaka2: $("#txtPlaka2").val(),
                Marka: $("#txtMarka").val(),
                Model: $("#txtModel").val(),
                Yil: $("#txtYil").val(),
                Kapasite: $("#txtKapasite").val(),
            };

            $.ajax({
                url: "/Services/srvArac.asmx/Ekle",
                data: JSON.stringify({ a: data }),
                method: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (o) {
                    console.log("Giris metodu successe girdi.");
                    var sonuc = o.d;
                    $("#yukleniyor").hide();
                    if (sonuc)
                        kendo.alert("Araç eklendi.");
                    else
                        kendo.alert("Bir hata oluştu!");

                    self.GridOlustur();
                    var win = $("#window").data("kendoWindow");
                    win.close();

                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    },

      Sil: function () {

        var self = this;

          function Sil() {
             

            win.element.on("click", "#btnSil", function () {
                Sil();
            });
        }

        function Sil() {
            
            $.ajax({
                url: "/Services/srvArac.asmx/Sil",
                data: JSON.stringify({ a: data }),
                method: "post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (o) {
                    console.log("Giris metodu successe girdi.");
                    var sonuc = o.d;
                    $("#yukleniyor").hide();
                    if (sonuc)
                        kendo.alert("Araç Silindi.");
                    else
                        kendo.alert("Bir hata oluştu!");

                    self.GridOlustur();
                    var win = $("#window").data("kendoWindow");
                    win.close();

                },
                error: function (o) {
                    console.log(o);
                }
            })
        }
    }





}