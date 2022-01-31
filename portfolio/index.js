import i18Obj from './translate.js';

// console.log ("Вёрстка валидная +10 \nВёрстка семантическая +20 \nВёрстка соответствует макету +48 \nТребования к css +12 \nИнтерактивность, реализуемая через css +20 \nИТОГО: +110");


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
const otherTheme = document.querySelector('.other-theme');
const listDarkClasses = ['section-skills', 'section-portfolio', 'section-video', 'section-price', 'line-section','title-section'];

portfolioBtns.addEventListener('click', (event) => {
    if(event.target.classList.contains('button-portfolio')) {
        changeImage(event);
        changeClassActive(event);
    }
});

lng.addEventListener('click', (event) => {
    changeClassActive(event)
    if(event.target.classList.contains('lng-link')) {
        getTranslate(event.target.dataset.lngkeyinobj);
    }
})

otherTheme.addEventListener('click', (event) => {
    console.log(otherTheme)
    otherTheme.classList.toggle('light');
    changeTheme(listDarkClasses);
});

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

// файл с переводом. Внутри него объект, внутри которого ещё два объекта с ключами "en" и "ru",
//  внутри каждого из них список свойств в формате ключ-значение, где ключ - это значение
//   data-атрибута элемента, а значение - текст, который внутри этого элемента находится.- i18Obj[language][item.dataset.i18]
// для каждого элемента указываем текстовое содержание - textContent - значение соответствующего 
// этому элементу свойства объекта i18Obj
// Подсказка. Язык перевода это аргумент, с которым вызывается функция getTranslate(). Ключ по которому
// получаем значение - dataset.i18

function getTranslate (language) {
    document.querySelectorAll('[data-i18]').forEach(
        (currentElement) => currentElement.textContent = i18Obj[language][currentElement.dataset.i18]
        )
}

function changeTheme (elements) {
    elements.forEach((currentElement) => {
        document.querySelector(`.${currentElement}`).classList.toggle('light-theme');
    });
}

// if (!currentElement.classList.contains('light-theme')){
//     currentElement.classList.add('light-theme');
// } else {
//     currentElement.classList.remove('light-theme');
