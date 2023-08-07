let toggleMenu = document.getElementById("toggle");
toggleMenu.addEventListener("change", exibirMenu);

let menu = document.getElementById("menu");
let icone = document.getElementsByClassName("menu_icon")[0];
let home = document.getElementsByClassName("home")[0];

function exibirMenu() {
    if (toggleMenu.checked) {
        menu.style.display = "block";
        home.style.display = "block";
        icone.src = "./imagens/close.png";
    } else {
        menu.style.display = "none";
        home.style.display = "none";
        icone.src = "./imagens/menu.png";
    }
}

window.addEventListener("resize", exibirMenuDesktop)

function exibirMenuDesktop() {
    let largura = document.body.clientWidth;
    if (largura >= 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}