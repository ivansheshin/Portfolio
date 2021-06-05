function initListener() {
    const menuBtn = document.querySelector('.header-button');
    const navList = document.querySelector('.header-nav-list');

    openMenu(menuBtn, navList);

    const navListClose = document.querySelector('.header-nav-list__link_end')

    closeMenu(navListClose, navList, menuBtn);


}


function openMenu(element, menu) {
    element.addEventListener('click', function () {
        menu.classList.add('open');
        listener.classList.add('close');

    })
}

function closeMenu(element, menu, btn) {
    element.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('close');
    })
}
initListener();