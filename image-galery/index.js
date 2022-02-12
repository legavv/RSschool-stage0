const accessKey = '6NIjmIj9d3y7JRn4PHNQuLD_nlV9vbLhJ0u_fXdsjZY';
const secretKey = 'JyQUY7LWZHMFvPcciH2h_6_DtHnNMZq56EMvrkVGNGM';
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