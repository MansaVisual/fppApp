document.addEventListener('DOMContentLoaded', function(){

    const toggle = document.querySelector('.toogle-menu');
    const menu = document.querySelector('.site-nav .col-36-28');

    function menuMobile(){
        menu.classList.toggle('active');
        console.log('hola')
    }

    toggle.addEventListener('click', menuMobile)

})