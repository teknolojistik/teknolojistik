<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

</head>
<body>
    <script src="../Scripts/login.js"></script>

    <link href="../Styles/Login.css" rel="stylesheet" />
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../lib/Kendo/js/kendo.all.min.js"></script>

    <div id="loading">
        <p style="margin-top: 30px; margin-left: 10px; position: absolute; color: wheat; position: fixed; z-index: 1;">Yükleniyor</p>
    </div>

    <div id="window"></div>

    <div class="container login-container" style="margin-left: 400px">
        <div class="row">

            <div class="col-md-6 login-form-2">
                <form id="login" method="post">

                    <h3>Login Form </h3>
                    <div class="form-group">
                        <input type="text" id="txtKullaniciAd" class="form-control" placeholder="Kullanıcı Adı *" value="" />
                    </div>
                    <div class="form-group">
                        <input type="password" id="txtSifre" class="form-control" placeholder="Şifre *" value="" />
                    </div>
                    <div class="form-group">
                        <button type="button" id="btnGiris" class="btnGiris">Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

<script>
    $(document).ready(function () {
        Login.Setup();
    })
</script>
</html>

