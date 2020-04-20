<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Giris.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Giris" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Styles/giris.css" rel="stylesheet" />
    <script src="../lib/js/jquery/jquery.min.js"></script>
     <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2020.1.406/styles/kendo.default-v2.min.css" />
    <script src="https://kendo.cdn.telerik.com/2020.1.406/js/jszip.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2020.1.406/js/kendo.all.min.js"></script>
    <script src="../Scripts/giris.js"></script>
</head>
<body>
    <div id="window">
        <div id="divEposta">
            <label>E-Posta</label>
            <br />
            <input type="text" id="txtEposta" class="txt" />
        </div>
        <div id="divSifre">
            <label>Şifre</label>
            <br />
            <input type="password" id="txtSifre" class="txt" />
        </div>
        <div id="divGirisYap">
            <button type="submit" id="btnGiris">Giriş Yap</button>
        </div>
    </div>


    <script>
        $(document).ready(function () {
            Giris.Setup();
        })
    </script>
</body>
</html>
