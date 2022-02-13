console.log (
    'ВЕСТКА: фото и строка поиска +5, ссылка на гитхаб логотип курса со ссылкой на курс +5',
    'на странице отображаются полученные от API изображения +10',
    'поисковый запрос, на странице отобразятся изображения соответствующей тематики +10',
    'ПОИСК: курсор находится в поле ввода +5, есть placeholder +5, нет выпадающего списка с предыдущими запросами +5',
    'поисковый запрос отправить нажатием Enter +5, поисковый запрос продолжает отображаться в поле ввода +5',
    'есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5'
)
console.log(
    'дополнительный функционал - при повторном нажатии на один и то же посковый запрос отображается следующая страница +5'
    )

const accessKey = '6NIjmIj9d3y7JRn4PHNQuLD_nlV9vbLhJ0u_fXdsjZY';
const urlBase = 'https://api.unsplash.com/search/photos?query='
let countPage = 1;
let urlParametrs = `&page=${countPage}&per_page=30&orientation=landscape&client_id=`;
const input = document.querySelector('.input');
const images = document.querySelector('.images');
let query = 'moto travel';

window.onload = function () {
    document.getElementById("input").focus();
    input.classList.remove('mute');

}
getData();

async function getData() {
    const response = await fetch(`${urlBase}${query}${urlParametrs}${accessKey}`);
    const data = await response.json();
    showData(data.results);
}
function removeImgLastResponse () {
    images.innerHTML = '';
}
function showData(dataArray) {
    dataArray.forEach((el) => {
        const image = document.createElement('div');
        image.classList.add('image');
        const img = document.createElement('img');
        img.classList.add('img')
        img.setAttribute("alt",`${el.alt_description}`);
        img.setAttribute("src",`${el.urls.regular}`);
        image.appendChild(img);
        images.appendChild(image);
    });
};

input.addEventListener('input', () => {
    input.classList.add('mute'); 
});
input.addEventListener('focus', () => {
    input.classList.add('mute'); 
});
input.addEventListener('blur', () => {
    input.classList.remove('mute');
});
input.addEventListener('mouseover', () => {
    input.classList.add('mute');
});
document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault()
    if (query === input.value) {
        countPage ++;
        urlParametrs = `&page=${countPage}&per_page=30&orientation=landscape&client_id=`;
    } else {
        countPage = 1 ;
        query = input.value
        urlParametrs = `&page=${countPage}&per_page=30&orientation=landscape&client_id=`;
    }
    removeImgLastResponse();
    getData();
});



    