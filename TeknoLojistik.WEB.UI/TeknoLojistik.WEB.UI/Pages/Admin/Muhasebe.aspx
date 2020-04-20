<%@ Page Language="C#" MasterPageFile="~/Pages/Master/Admin.Master" AutoEventWireup="true" CodeBehind="Muhasebe.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Admin.Muhasebe" %>



<asp:Content ID="SideBar" ContentPlaceHolderID="SideBar" runat="server">
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><a href="javascript: history.go(-1)">Geri</a></div>
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Cariler</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Hesaplar</a>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content" ContentPlaceHolderID="Content" runat="server">
    <script src="../../lib/js/jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2020.1.406/styles/kendo.default-v2.min.css" />
    <script src="https://kendo.cdn.telerik.com/2020.1.406/js/jszip.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2020.1.406/js/kendo.all.min.js"></script>

    <div id="grid"></div>
    <div id="window"></div>

</asp:Content>
