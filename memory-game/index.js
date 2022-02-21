const arrImgFace = [
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra',
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra'
]
const wrapperCards = document.querySelector('.wrapper__cards');
const url = './assets/img/'
const countStep = document.querySelector('.count')
let countStepGame ='';
let currentOpenImg = '';
let countOpenCards = 0;

showImages(mixRandomArray(arrImgFace));
const img = document.querySelectorAll('.img')
const cards = document.querySelectorAll('.card')
addListenerToCards();
window.addEventListener('load', ( () => {
    if (localStorage.getItem('stepsLastGame')) {
        countStepGame = localStorage.getItem('stepsLastGame')
        countStep.textContent = `${countStepGame}`;
        countStepGame = 0;
    }
}))


function showImages (arrImages) {
    arrImages.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('card');
    wrapperCards.append(card);
    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', `${url}${el}.jpg`)
    img.setAttribute('alt', `${el}`)
    card.append(img)
    })
}
function mixRandomArray (arr) {
    let randomArr = [];
    arr.forEach((el) => {
        let flag = true;
        do {
            const radomIndex = getRandomZeroInt(arr.length - 1)
            if (!randomArr[radomIndex]) {
                randomArr[radomIndex] = el
                flag = false;
                
            }
        } while (flag);
    })
    return randomArr;
}
function getRandomZeroInt (max) {
    return Math.floor( Math.random() * (max + 1) )
}
function findSameImg (event) {
    if (currentOpenImg) {
        countStepGame++
        if ( currentOpenImg === event.target.childNodes[0].alt ) { //the same alt card 
            cards.forEach((el) => {
                if (el.className === 'card remove-bg') {
                    el.classList.remove('remove-bg')
                    el.classList.add('open')
                    el.childNodes[0].className += ' view';
                }
            })
            currentOpenImg = '';
            countOpenCards += 2;
        } else {
            cards.forEach((el) => {
                setTimeout((() =>{el.classList.remove('remove-bg')} ), 1000)
                
            })
            currentOpenImg = '';
        }
    } else {
        currentOpenImg = event.target.childNodes[0].alt
        clickLastTarget = event.target;
    }
    if (countOpenCards === arrImgFace.length) {
        localStorage.setItem('stepsLastGame', `${countStepGame}`);
        countStep.textContent = `${countStepGame}`;
        countOpenCards = 0;
        countStepGame = 0; 
        setTimeout((() => {
            cards.forEach((el) => {
                el.classList.remove('open')
            }); 
            img.forEach((el) => {
                el.classList.remove('view')
            })    
        }), 2000) 
    }
}
function addListenerToCards () {
    cards.forEach((el) => {
        el.addEventListener('click', (e) => {
            if (el.className !== 'card open' ) {
                el.classList.add('remove-bg')
                findSameImg(e)
            }
        })
    })
}



