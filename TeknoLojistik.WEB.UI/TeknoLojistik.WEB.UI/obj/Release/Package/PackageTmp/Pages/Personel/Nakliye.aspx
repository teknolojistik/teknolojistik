<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/Master/Personel.Master" AutoEventWireup="true" CodeBehind="Nakliye.aspx.cs" Inherits="TeknoLojistik.WEB.UI.Pages.Personel.Nakliye" %>

<asp:Content ID="Content2" ContentPlaceHolderID="SideBar" runat="server">
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><a href="javascript: history.go(-1)">Geri</a></div>
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Araçlar</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Firmalar</a>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Icerik" ContentPlaceHolderID="Icerik" runat="server">
    <h1>Nakliye modülü</h1>
</asp:Content>
