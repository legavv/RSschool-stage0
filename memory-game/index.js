const arrImgFace = [
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra',
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra'
]
const wrapperTopTen = document.querySelector('.top-ten')
const resalts = document.querySelector('.resalts');
const url = './assets/img/'
const countStep = document.querySelector('.count')
const button = document.querySelector('.button')
const cards = document.querySelectorAll('.card')

let arrTopResalts = [];
let stepsLastGame ='';
let currentOpenImg = '';
let countOpenCards = 0;
let isNotClick = true;

showImages(mixRandomArray(arrImgFace));
const imgs = document.querySelectorAll('.img')
window.addEventListener('load', ( () => {
    if (localStorage.getItem('stepsLastGame')) {
        stepsLastGame = localStorage.getItem('stepsLastGame')
        countStep.textContent = `${stepsLastGame}`;
        stepsLastGame = 0;
        arrTopResalts = JSON.parse( localStorage.getItem('arrTopResalts') )
        showTopResalts(arrTopResalts);
    }
}))


///FUNCTION
function removeImg () {
    cards.forEach((card) => {
        card.innerHTML = ''; 
    })
}
function showImages (arr) {
    arr.forEach((el, index) => {
        const img = document.createElement('img')
        img.classList.add('img');
        img.setAttribute('src', `${url}${el}.jpg`)
        img.setAttribute('alt', `${el}`)
        cards[index].append(img)
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
        stepsLastGame++
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
                isNotClick = false;
                setTimeout((() =>{
                    el.classList.remove('remove-bg')
                    isNotClick = true;
                }), 800)
                
            })
            currentOpenImg = '';
        }
    } else {
        currentOpenImg = event.target.childNodes[0].alt
        clickLastTarget = event.target;
    }
    if (countOpenCards === arrImgFace.length) {
        localStorage.setItem('stepsLastGame', `${stepsLastGame}`);
        if (stepsLastGame) {
            arrTopResalts = insertResaltInTop (stepsLastGame, arrTopResalts);
        }
        arrTopResalts.sort((a, b) => a - b);
        localStorage.setItem('arrTopResalts', JSON.stringify(arrTopResalts));
        showTopResalts(arrTopResalts);
        countStep.textContent = `${stepsLastGame}`;
        countOpenCards = 0;
        stepsLastGame = 0; 
    }
}
function showTopResalts (arrResalts) {
    resalts.innerHTML = '';
    arrResalts.forEach((res) => {
        if (res) {
            const result = document.createElement('li')
            result.classList.add('res')
            result.textContent = `${res}`;
            resalts.append(result)
        }
    })

}
function insertResaltInTop (lastResult, arr) {
    if (arr.length < 10) {
        arr.push(lastResult)
    } else {
        if (arr[arr.length - 1] > lastResult) {
            arr.pop()
            arr.push(lastResult)
        }
    }
    return arr;
}


///LISTENERS
cards.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (el.className !== 'card open' ) {
            if (isNotClick) {
                el.classList.add('remove-bg')
                findSameImg(e)
            }
        }
    })
})
button.addEventListener('click', () => {
    cards.forEach((el) => {
        el.classList.remove('open')
    }); 
    // imgs.forEach((el) => {
    //     el.classList.remove('view')
    // })
    countOpenCards = 0;
    stepsLastGame = 0; 
    removeImg();
    showImages(mixRandomArray(arrImgFace));
})


