const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const funMenu = document.querySelector('#funstuff-page');
    let scrollPos = window.scrollY;
    console.debug(scrollPos);
    // adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 1900){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        funMenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 3000){
        funMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
        if(window.innerWidth <= 768 && menuBars){
            menu.classList.toggle('is-active');
            menuLinks.classList.remove('active');
        }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//date section
var t = setInterval(() =>{
    n = new Date();
    o = new Date("2021-05-24T09:45:00");
    var time = n.getTime() - o.getTime();
    var days = time / (1000 * 3600 * 24);
    var hours = (days - Math.floor(days)) * 24;
    var minutes = (hours - Math.floor(hours)) * 60;
    var seconds = (minutes - Math.floor(minutes)) * 60;
    const dateText = document.querySelector('#date');
    
    dateText.innerHTML = Math.floor(days) + " delightful days,<br>"
     + Math.floor(hours) + " hours,<br>"
      + Math.floor(minutes) + " minutes,<br>"
       + "and " + Math.round(seconds) + " seconds!";
    }, 1000);