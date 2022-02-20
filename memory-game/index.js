const arrImgFace = [
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra',
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra'
]
const wrapperCards = document.querySelector('.wrapper__cards');
const url = './assets/img/'
let currentOpenImg = '';
let countOpenCards = 0;

showImages(mixRandomArray(arrImgFace));

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
        if ( currentOpenImg === event.target.childNodes[0].alt ) { //the same alt card but not the same card 
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
                setTimeout((() => el.classList.remove('remove-bg')), 500)
            })
            currentOpenImg = '';
        }
    } else {
        currentOpenImg = event.target.childNodes[0].alt
        clickLastTarget = event.target;
    }
    if (countOpenCards === arrImgFace.length) {
        countOpenCards = 0;
        setTimeout((() => {
            wrapperCards.innerHTML = '';
            showImages(mixRandomArray(arrImgFace));
        }), 2000)
        
    }
}

const cards = document.querySelectorAll('.card')
cards.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (el.className !== 'card open' ) {
            el.classList.add('remove-bg')
                findSameImg(e)
        }
    })
})


