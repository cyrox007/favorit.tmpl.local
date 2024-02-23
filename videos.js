const iframe = document.querySelector('.iframe-view');
const iframe_open_buttons = document.querySelectorAll('.video-preview__play-btn');
const modal_frame = document.querySelector('.frames__modal-wrapper');
const modal_frame_close_btn = document.querySelector('.frames__modal-close-btn');


iframe_open_buttons.forEach(btn => {
   btn.addEventListener('click', e => {
    e.preventDefault();
    modal_frame.classList.add('active');
    iframe.src = btn.dataset.videoSrc;
   });
});

modal_frame_close_btn.addEventListener('click', e => {
    e.preventDefault();
    modal_frame.classList.remove('active');
    iframe.src = '';
});