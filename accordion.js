const accordion_1 = document.querySelector('.grid-item_1');
const accordion_open_btn_1 = document.querySelector('.accordion__btn_1');
const accordion_close_btn_1 = document.querySelector('.accordion__close-btn_1');

const accordion_2 = document.querySelector('.grid-item_2');
const accordion_open_btn_2= document.querySelector('.accordion__btn_2');
const accordion_close_btn_2 = document.querySelector('.accordion__close-btn_2');


accordion_open_btn_1.addEventListener('click', (e) => {
    e.preventDefault();
    accordion_1.classList.toggle('active');
    accordion_2.classList.remove('active');
});

accordion_close_btn_1.addEventListener('click', (e) => {
    e.preventDefault();
    accordion_1.classList.toggle('active');
});

accordion_open_btn_2.addEventListener('click', (e) => {
    e.preventDefault();
    accordion_2.classList.toggle('active');
    accordion_1.classList.remove('active');
});

accordion_close_btn_2.addEventListener('click', (e) => {
    e.preventDefault();
    accordion_2.classList.toggle('active');
});