const carousel_list_1 = document.querySelector('.carousel__list_1');
const carousel__buttons_1 = document.querySelectorAll('.carousel__btn_1');

let activeIndex_1 = 0;

carousel__buttons_1.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        if (btn.classList.contains('carousel__button_1_prev')) {
            if (activeIndex_1 > 0) {
                activeIndex_1--;
            } else {
                activeIndex_1 = 7;
            }
        } else if(btn.classList.contains('carousel__button_1_next')) {
            if (activeIndex_1 < 7) {
                activeIndex_1++;
            } else {
                activeIndex_1 = 0;
            }

        }
        carousel_list_1.style.transform = `translateX(${-activeIndex_1 * 100}%)`;
    });
});



const carousel_list_2 = document.querySelector('.carousel__list_2');
const carousel__buttons_2 = document.querySelectorAll('.carousel__btn_2');

let activeIndex_2 = 0;

carousel__buttons_2.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        if (btn.classList.contains('carousel__button_2_prev')) {
            if (activeIndex_2 > 0) {
                activeIndex_2--;
            } else {
                activeIndex_2 = 6;
            }
        } else if(btn.classList.contains('carousel__button_2_next')) {
            if (activeIndex_2 < 6) {
                activeIndex_2++;
            } else {
                activeIndex_2 = 0;
            }

        }
        carousel_list_2.style.transform = `translateX(${-activeIndex_2 * 100}%)`;
        
    });
});


const carousel_list_3= document.querySelector('.carousel__list_3');
const carousel__buttons_3 = document.querySelectorAll('.carousel__btn_3');

let activeIndex_3 = 0;

carousel__buttons_3.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        if (btn.classList.contains('carousel__button_3_prev')) {
            if (activeIndex_3 > 0) {
                activeIndex_3--;
            } else {
                activeIndex_3 = 2;
            }
        } else if(btn.classList.contains('carousel__button_3_next')) {
            if (activeIndex_3 < 2) {
                activeIndex_3++;
            } else {
                activeIndex_3 = 0;
            }

        }
        carousel_list_3.style.transform = `translateX(${-activeIndex_3 * 100}%)`;
        
    });
});