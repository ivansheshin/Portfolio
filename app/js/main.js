function initListener() {
    const menuBtn = document.querySelector('.header-button');
    const navList = document.querySelector('.header-nav-list');

    if(window.matchMedia('(max-width: 480px)').matches){
        navList.insertAdjacentHTML("beforeend", '<li class="header-nav-list__item_end">Exit Menu</li>');
    }

    menuBtn.addEventListener('click', function () {
        navList.classList.add('open');
        menuBtn.classList.add('close');

    })
    const navListClose = document.querySelector('.header-nav-list__item_end')


    navListClose.addEventListener('click', function () {
        navList.classList.remove('open');
        menuBtn.classList.remove('close');
    })


}
initListener();