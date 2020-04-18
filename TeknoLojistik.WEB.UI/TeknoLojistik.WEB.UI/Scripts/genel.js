var Genel = {
    Admin: 0,

    Setup: function () {
        this.GizleGoster();
    },

    GizleGoster: function () {
        var admin = $("#admin");
        var personel = $("#personel");

        if (this.Admin == 1) {
            admin.show();
            personel.hide();
        }
        else {
            admin.hide();
            personel.show();
        }
    }
}