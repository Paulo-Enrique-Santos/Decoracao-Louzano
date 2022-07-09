//DEFININDO O SLIDE DE FOTOS
var margin = 0;
function AlterPicture(){
    var first = document.getElementById('first');
    margin -= 110;
    if(margin === -550){
        margin = 0;
    }

    first.style.marginLeft = margin + '%';
}

setInterval(() => {
    AlterPicture();
}, 5000);

//ABRINDO O MENU HAMBURGUER
let menu = document.querySelector('.menu');
let navMenu = document.querySelector('.nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(navMenu.style.top == '0px'){
        navMenu.style.top = '-2000px';
    }else{
        navMenu.style.top = '0px';
    }
});

navMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(navMenu.style.top == '0px'){
        navMenu.style.top = '-2000px';
    }else{
        navMenu.style.top = '0px';
    }
});