const arrImgFace = [
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra',
    'bear', 'elephant', 'hipopotam', 'leopard', 'lion', 'peacock', 'snake', 'walrus', 'zebra'
]
const wrapperCards = document.querySelector('.wrapper__cards');
const url = './assets/img/'

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
    const imgBg = document.createElement('img');
    imgBg.classList.add('img-bg');
    imgBg.setAttribute('src', `${url}bg.jpg`)
    imgBg.setAttribute('alt', 'bg')
    card.append(imgBg)
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

document.querySelectorAll('.card').forEach((el) => {
    el.addEventListener('click', (e) => {
    el.classList.toggle('active')
    })
})

// console.log(mixRandomArray(imgName))

