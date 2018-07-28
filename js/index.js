// let popupLink = document.querySelector('.popup__link');
// let popup = document.getElementById('popup');
// let popupClose = document.querySelector('.popup__close');
let homeMenu = document.getElementById('home-menu');
let menu = document.querySelector('.menu');
let myMenuClose = document.querySelector('.iconmenu');

homeMenu.addEventListener('click', function(){
    menu.classList.add('menu-see');
});

myMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu-see');
});


// popupLink.addEventListener('click',function(){
//     popup.classList.add('mostrar');
// }); 

// popupClose.addEventListener('click',function(){
//     popup.classList.remove('mostrar');
// });