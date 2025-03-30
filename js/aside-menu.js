const asideMenu = document.querySelector('.aside-menu__container') ,
    menuLogo = document.querySelector('.header__icon--menu path') ,
    closeAside = document.querySelector('.close-icon path') ;

/* ¿Por qué no funciona?  ↓↓ 
asideMenu.classList.toggle('showAsideMenu') */
    
document.addEventListener('click', (event) => { // 'event' captura el evento del clic

    if (event.target === menuLogo) { // si el objetivo del clic es 'menuLogo'...
        asideMenu.style.transform = 'translateX(0%)' ;
    } else if (event.target === closeAside) {
        asideMenu.style.transform = 'translateX(-102%)' ;
    } else if (!asideMenu.contains(event.target)) { // 'contains' en referencia a si el clic ocurre dentro de 'asideMenu'
        asideMenu.style.transform = 'translateX(-102%)' ;
    } 
    /* Imprime el elemento en que se da un clic ↓↓ */
    //console.log(event.target) ;
})


/*----EXTRA: Funcionalidad para cambiar todos los colores de efecto 'hover' al dar clic en
    el logo de converse centrado en la web ↓↓----*/

const logoConverse = document.querySelector('#header__logo-converse') ;

logoConverse.addEventListener('click', () => {
    let characters = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9] ;
    let result = '#' ;

    for (let i = 0; i < 6; i++) {
        result += characters[takeCharacter()] ;
    }

    function takeCharacter() {
        return Math.floor(Math.random() * characters.length) ;
    }

    document.documentElement.style.setProperty('--red', result) ;
})