import i18Obj from './translate.js';

// console.log ("Вёрстка валидная +10 \nВёрстка семантическая +20 \nВёрстка соответствует макету +48 \nТребования к css +12 \nИнтерактивность, реализуемая через css +20 \nИТОГО: +110");
console.log();


//MENU BURGER
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list'); 
const navLinks = document.querySelectorAll('.nav-link')

burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    burger.classList.toggle('active');
});

// navLinks.forEach((el) => el.addEventListener('click', () => {
//     navList.classList.remove('active');
//     burger.classList.remove('active');
// }));

navList.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        navList.classList.remove('active');
        burger.classList.remove('active');
    }
  }

  
//SECTION PORTFOLIO
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImgs = document.querySelectorAll('.portfolio-img');
const lng = document.querySelector('.lng');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

portfolioBtns.addEventListener('click', changeImage);
portfolioBtns.addEventListener('click', changeClassActive)
lng.addEventListener('click', changeClassActive)

preloadImages();

function changeImage(event) { 
    if (event.target.classList.contains('button-portfolio')) {
        portfolioImgs.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`)
    }
}

function preloadImages() {
    seasons.forEach((seasonName) => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${seasonName}/${i}.jpg`;
        }
    })
}

function changeClassActive(event) {
        const allButton = document.querySelectorAll(`.${event.target.classList[0]}`);
        allButton.forEach((button) => button.classList.remove('active'));
        event.target.classList.add('active');
}

// function getTranslate (lenguager) {
    // document.querySelectorAll('[data-i18]').forEach((item) => { })
// }
// console.log(event.target.classList)