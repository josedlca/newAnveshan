//smoot scroll
var scroll = new SmoothScroll('a[href="#home"]')
var scroll = new SmoothScroll('a[href="#quisque"]')
var scroll = new SmoothScroll('a[href="#process"]')
var scroll = new SmoothScroll('a[href="#step"]')
var scroll = new SmoothScroll('a[href="#services"]')
var scroll = new SmoothScroll('a[href="#footer"]')

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
let arrowUp = document.getElementById('arrow-up');
let popup = document.getElementById('popup');
let viewPopup = document.querySelector('.quisque__contein--video-parts-into') 
let stopCloseVideo = document.getElementById('stop-video');

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

// arrow up function//////////////
arrowUp.classList.add('hide-arrow');
window.addEventListener('scroll',function(){
    if(window.pageYOffset >20){
        arrowUp.classList.remove('hide-arrow');
    }else{
        arrowUp.classList.add('hide-arrow');
    }
});

//view popup
viewPopup.addEventListener('click', function(){
    popup.classList.add('view-popup');
})


  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'SHFTHDncw0g',
    });
  }


stopCloseVideo.addEventListener('click', function(){
    popup.classList.remove('view-popup');
    player.stopVideo();
});





