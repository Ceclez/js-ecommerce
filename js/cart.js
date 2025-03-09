/*---- Lógica para mostrar el carrito ↓↓ ----*/

const cartIcon = document.querySelector('.header__icon--cart') ;
const cartMenu = document.querySelector('.cart__container') ;
    // burbuja con número de productos en carrito 
let cartMessageNum = document.querySelector('.cart__quantity') ;
let count = 0 ;

document.addEventListener('click', (event) => {
    // 'event.target' para ubicar cada clic 
    if (event.target === cartIcon && count === 0) {
        cartMenu.style.transform = 'translateX(0%)' ;
        count++ ;
    } else if (event.target === cartIcon && count === 1) {
        cartMenu.style.transform = 'translateX(102%)' ;
        count-- ;
    } else if (!cartMenu.contains(event.target)) {
        cartMenu.style.transform = 'translateX(102%)' ;
        count = 0 ;
    }
    // borrar elemento del carrito ↓↓
    const trashEle = document.querySelectorAll('.cart__icon') ;
    
    trashEle.forEach((icon) => {
        if (event.target === icon) {
            icon.parentElement.remove() ;
                // contar y mostrar los elementos del carrito ↓↓
            cartMessageNum.innerHTML = trashEle.length -1 ;
        }
    })
}) ;


/*---- Lógica para el agregado de productos al carrito ----*/

const addProduct = document.querySelectorAll('.products article button') ;
const trashIcon = document.querySelector('.cart__icon') ;
const cartMessage = document.querySelector('.message') ;
const productsInCart = document.getElementsByClassName('cart__article') ;

addProduct.forEach((e) => {
    e.addEventListener('click', () => {
            // hacer una copia de un elemento ↓↓
        const cloneTrashIcon = trashIcon.cloneNode(true) ;
        let cloneProduct = e.parentElement.cloneNode(true) ;
            // agregar los elementos estilizados a la lista de productos ↓↓
        cartMenu.appendChild(cloneProduct) ;
        cloneProduct.setAttribute('class', 'cart__article') ;
        cloneProduct.style.fontSize = '1.6rem' ;
        cloneProduct.style.textAlign = 'center' ;
        cloneProduct.children[0].style.width = '5rem' ;
        cloneTrashIcon.style.fontSize = '2.2rem' ;
        cloneProduct.appendChild(cloneTrashIcon) ;
            // remueve el botón del artículo ↓↓
        cloneProduct.children[3].remove() ;
            // contar y mostrar los elementos del carrito ↓↓
        cartMessageNum.innerHTML = productsInCart.length ;
            // mostrar mensaje de agregado ↓↓
        cartMessage.style.animation = 'cartMessage 4s ease-in-out forwards' ;
        setTimeout(function() {
            cartMessage.style.animation = 'none' ;
        },4100) ;
    })
})


/*--- Lógica para borrar el marcador de elementos en carrito si es '0' ----*/

    // selección del contenedor del span con el número de elementos en carrito ↓↓
const cartBadge = document.querySelector('.cart__num-elements') ; 

    // configuración del observer para checar cada cambio ↓↓
const config = { chararcterData: true, childList: true } ;
    // instancia 'onChange' en remplazo del conocido o reservado 'observer' ↓↓
const onChange = new MutationObserver((elements) => { // mutationsList puede ser cualquier otra palabra
    elements.forEach(eachChange => { // mutation puede también ser cualquier otra palabra
        if (eachChange.target.textContent === '0') {
           cartBadge.style.display = 'none' ;
        } else {
            cartBadge.style.display = '' ;
        }
    })
})
    // se ejecuta ↓↓
onChange.observe(cartMessageNum, config) ; // 1er parámetro: elemento en que se ejecuta. 2do parámetro: configuración con que se hace


/*---- mostrar la cantidad de productos en el carrito desde la primera carga del sitio ↓↓ ----*/
cartMessageNum.innerHTML = productsInCart.length ;

/* funcionalidad personal: hacer que cuando se dé clic al logo de converse, se modifique 
   la variable $red a un color aleatorio hexadecimal */