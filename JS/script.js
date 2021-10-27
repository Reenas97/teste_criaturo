function mostraMenu(){
    const menu = document.getElementById("menu");
    if (menu.style.display !="flex") {
        menu.style.display ="flex";
    } else {
        menu.style.display ="none";
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 600) {
        document.getElementById("menu").style.display="flex"
    }
}, true);