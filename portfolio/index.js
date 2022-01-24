// console.log ("Вёрстка валидная +10 \nВёрстка семантическая +20 \nВёрстка соответствует макету +48 \nТребования к css +12 \nИнтерактивность, реализуемая через css +20 \nИТОГО: +110");
console.log();
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list'); 
const navLinks = document.querySelectorAll('.nav-link')
burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    burger.classList.toggle('active');
});


navLinks.forEach((el) => el.addEventListener('click', () => {
    navList.classList.remove('active');
    burger.classList.remove('active');
}));


