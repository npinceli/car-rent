function menuShow() { 
    let menuMobile = document.querySelector('.mobile-menu') //selecionando a classe do menu mobile e armazenando ela e seus valores na variavel
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-open.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/menu_close.svg";
    }
}


