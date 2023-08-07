// EXIBIR MENU DE NAVEGAÇÃO MOBILE

let toggleMenu = document.getElementById("toggle");
toggleMenu.addEventListener("change", exibirMenu);

let menu = document.getElementById("menu");
let icone = document.getElementsByClassName("menu_icon")[0];
let marcadorClose = document.getElementsByClassName("marcadorCloseOff")[0];
let submenu1 = document.getElementsByClassName("secao1")[0];
let submenu2 = document.getElementsByClassName("secao2")[0];

function exibirMenu() {
    if (toggleMenu.checked) {
        // EXIBIR MENU
        menu.style.display = "block";
        // TROCAR O TRES LINHAS POR X
        icone.src = "./imagens/close.png";
        icone.classList.add("close");
        // COLOCAR O DETALHE NO X
        marcadorClose.classList.add("marcadorCloseOn");
        // CUSTOMIZAR O MENU DE NAV
        submenu1.style.display = "flex";
        submenu2.style.display = "flex";
        

    } else {
        // OMITIR MENU
        menu.style.display = "none";
        // TROCAR O X DE VOLTA PARA TRES LINHAS
        icone.src = "./imagens/menup.png";
        icone.classList.remove("close");
        // TIRAR DETALHE DO X E ESCONDER A CUSTOMIZAÇÃO
        marcadorClose.classList.remove("marcadorCloseOn");
        submenu1.style.display = "none";
        submenu2.style.display = "none";
    }
}

// FECHAR MENU DO MOBILE QUANDO ITEM DENTRO E FORA DELE FOR CLICADO

let containter = document.getElementById("container");
container.addEventListener("click", fecharMenuMobile)

function fecharMenuMobile(){
    menu.style.display = "none";
    marcadorClose.classList.remove("marcadorCloseOn")
    icone.src = "./imagens/menup.png";
    icone.classList.remove("close");;
}

// MENU DE NAV E DE SUBNIVEL DO DESKTOP

let secaoPrincipal1 = document.getElementsByClassName("secaoPrincipal")[0];
let secaoPrincipal2 = document.getElementsByClassName("secaoPrincipal")[1];
let secaoPrincipal3 = document.getElementsByClassName("secaoPrincipal")[2];

let menuHome = document.getElementsByClassName("ajusteDeskMenu1")[0];
let menuDivu = document.getElementsByClassName("ajusteDeskMenu2")[0];

submenu1, secaoPrincipal1.addEventListener("mouseenter", exibirSubmenu1);
submenu2, secaoPrincipal2.addEventListener("mouseenter", exibirSubmenu2);
menuHome.addEventListener("mouseleave", esconderSubmenu1);
menuDivu.addEventListener("mouseleave", esconderSubmenu2);
secaoPrincipal3.addEventListener("mouseenter", exibirMenu3);
secaoPrincipal3.addEventListener("mouseleave", esconderMenu3);

function exibirSubmenu1() {
    submenu1.style.display = "flex";
    submenu1.style.backgroundColor = "#fcc8a2";
    secaoPrincipal1.classList.remove("secaoPrincipal");
    secaoPrincipal1.classList.add("secaoHover");
}

function exibirSubmenu2() {
    submenu2.style.display = "flex";
    submenu2.style.backgroundColor = "#fcc8a2";
    secaoPrincipal2.classList.remove("secaoPrincipal");
    secaoPrincipal2.classList.add("secaoHover");
}

function esconderSubmenu1() {
    submenu1.style.display = "none";
    secaoPrincipal1.classList.remove("secaoHover");
    secaoPrincipal1.classList.add("secaoPrincipal");
}

function esconderSubmenu2() {
    submenu2.style.display = "none";
    secaoPrincipal2.classList.remove("secaoHover");
    secaoPrincipal2.classList.add("secaoPrincipal");
}

function exibirMenu3 () {
    secaoPrincipal3.classList.remove("secaoPrincipal");
    secaoPrincipal3.classList.add("secaoHover");
}

function esconderMenu3 () {
    secaoPrincipal3.classList.remove("secaoHover");
    secaoPrincipal3.classList.add("secaoPrincipal");
}

// AJUSTAR TELA

window.addEventListener("resize", exibirMenuDesktop)

function exibirMenuDesktop() {
    let largura = document.body.clientWidth;
    if (largura >= 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}