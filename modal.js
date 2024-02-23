const modal = document.querySelector('.modal');
const open_modal_buttons = document.querySelectorAll('.open-modal-btn');
const modal_close_btn = document.querySelector('.modal__close-btn');


open_modal_buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.add('active');
    });
});


modal_close_btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
});