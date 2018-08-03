
let homeMenu = document.getElementById('home-menu');
let menu = document.querySelector('.menu');
let myMenuClose = document.querySelector('.iconmenu');
let closeHome = document.querySelector('.close-home');
let closeQuisque = document.querySelector('.close-quisque');
let closeProcess = document.querySelector('.close-process');
let closeServices = document.querySelector('.close-services');
let closeStep = document.querySelector('.close-step');
let closeFooter = document.querySelector('.close-footer');
let closeContact = document.querySelector('.close-contact');

homeMenu.addEventListener('click', function(){
    menu.classList.add('menu-see');
});

myMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu-see');
});

function closeNav(section){
    section.addEventListener('click', function(){
        menu.classList.remove('menu-see');
    });
}

closeNav(closeHome);
closeNav(closeQuisque);
closeNav(closeProcess);
closeNav(closeServices);
closeNav(closeStep);
closeNav(closeFooter);
closeNav(closeContact);