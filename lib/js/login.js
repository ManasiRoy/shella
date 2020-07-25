function login() {
    const btnClose = document.querySelectorAll('.btn-close');
    const bg = document.querySelector('.wrapper');
    const body = document.querySelector('body');
    const account = document.querySelector('.account-details');
    const login = document.querySelector('.login-outr');
    const bag = document.querySelector('.bagdetails');
    const bagpopup = document.querySelector('.bag-popup');
    const searchpopup = document.querySelector('.search-outr');
    const search = document.querySelector('.search');

    for (let btns of btnClose) {
        btns.addEventListener('click', () => {
            login.style.transform = 'translateX(100%)';
            bagpopup.style.transform = 'translateX(-100%)';
            searchpopup.style.transform = 'translateY(-100%)';

            bg.classList.remove('overlay');
            body.classList.remove('fixed');
        });
    }

    bg.addEventListener('click', () => {
        login.style.transform = 'translateX(100%)';
        bagpopup.style.transform = 'translateX(-100%)';
        searchpopup.style.transform = 'translateY(-100%)';

        bg.classList.remove('overlay');
        body.classList.remove('fixed');
    });

    account.addEventListener('click', () => {
        login.style.transform = 'translateX(0%)';
        bg.classList.add('overlay');
        body.classList.add('fixed');
    });

    bag.addEventListener('click', () => {
        bagpopup.style.transform = 'translateX(0%)';
        bg.classList.add('overlay');
        body.classList.add('fixed');
    });

    search.addEventListener('click', () => {
        searchpopup.style.transform = 'translateY(0%)';
        bg.classList.add('overlay');
        body.classList.add('fixed');
    });
}
login();