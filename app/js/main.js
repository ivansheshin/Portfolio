function initListener(){
    const menuBtn = document.querySelector('.header-button');
    const navList = document.querySelector('.header-nav-list');

    menuBtn.addEventListener('click', function(){
        navList.classList.add('open');
        menuBtn.classList.add('close');
    })
}
initListener();