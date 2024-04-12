let singin = document.querySelector('.singinbtn');
let singup = document.querySelector('.singupbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let textt = document.querySelector('.textt');


singin.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'sing in';
    text.innerHTML = '';
    textt.innerHTML = '';
    singup.classList.add('disable');
    singin.classList.remove('disable');
    underline.style.transform = 'translatex(35px)';
});
singup.addEventListener('click', () => {
    namefield.style.maxHeight = '60px'
    title.innerHTML = 'sing up'
    text.innerHTML = 'password suggestions '
    textt.innerHTML = 'click here';
    singin.classList.add('disable')
    singup.classList.remove('disable')
    underline.style.transform = 'translatex(0)';
})