function initListener() {
    const menuBtn = document.querySelector('.header-button');
    const navList = document.querySelector('.header-nav-list');




    menuOpen(menuBtn, navList);

    const navListClose = document.querySelector('.header-nav-list__link_end')
    menuClose (navListClose, navList, menuBtn);


}


function menuOpen(listener, list){
    listener.addEventListener('click', function () {
        list.classList.add('open');
        listener.classList.add('close');

    })
}

function menuClose(listener, list, btn){
   listener.addEventListener('click', function(){
        list.classList.remove('open');
        btn.classList.remove('close');
    })
}
initListener();

