const input = document.querySelector('.input');

window.onload = function () {
    document.getElementById("input").focus();
}

input.addEventListener('input', () => {
    input.classList.add('mute'); 
});
input.addEventListener('focus', () => {
    input.classList.add('mute'); 
});
input.addEventListener('mouseover', () => {
    input.classList.add('mute'); 
});
input.addEventListener('blur', () => {
    input.classList.remove('mute');
});
input.addEventListener('mouseout', () => {
    input.classList.remove('mute');
});