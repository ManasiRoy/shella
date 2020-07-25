const filter = () => {
    const btnClose = document.querySelectorAll('.btn-close');
    const filterpopup = document.querySelector('.filter-popup');
    const showfilter = document.querySelector('.showfilter');
    const bg = document.querySelector('.wrapper');
    const body = document.querySelector('body');

    for (let btns of btnClose) {
        btns.addEventListener('click', () => {
            filterpopup.style.transform = 'translateX(-100%)';
            bg.classList.remove('overlay');
            body.classList.remove('fixed');
        });
    }

    bg.addEventListener('click', () => {
        filterpopup.style.transform = 'translateX(-100%)';
        bg.classList.remove('overlay');
        body.classList.remove('fixed');
    });

    showfilter.addEventListener('click', () => {
        filterpopup.style.transform = 'translateX(0%)';
        bg.classList.add('overlay');
        body.classList.add('fixed');
    });

};
filter();