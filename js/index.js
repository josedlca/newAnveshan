// let popupLink = document.querySelector('.popup__link');
// let popup = document.getElementById('popup');
// let popupClose = document.querySelector('.popup__close');
let homeMenu = document.getElementById('home-menu');
let myMenu = document.querySelector('.mymenu');
let myMenuClose = document.querySelector('.mymenu-close');
let myMenuNav = document.querySelector('.mymenu-nav')

homeMenu.addEventListener('click', function(){
    myMenu.classList.add('mymenu-see');
    myMenuNav.classList.add('move-nav');
});

myMenuClose.addEventListener('click', function(){
    myMenu.classList.remove('mymenu-see');
    myMenuNav.classList.remove('move-nav');
});

// popupLink.addEventListener('click',function(){
//     popup.classList.add('mostrar');
// }); 

// popupClose.addEventListener('click',function(){
//     popup.classList.remove('mostrar');
// });