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

portfolioBtns.addEventListener('click', changeImage);
function changeImage(event) { 
    if (event.target.classList.contains('button-portfolio')) {
        portfolioImgs.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`)
    }
}
