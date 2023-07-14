//Cambio de cantidad de articulos ingresado por el usuario
let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

//le decimos que plusBtn.addEnventListener va a escuchar lo que se hace  primero va el evento y luego lo que se hara
//usamos values porque es el atributo que definimos en este input
let userInputNumber = 0;
plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});

//Agregar el total de productos al carrito cuando se presiona el boton  ADD TO CART
const addToCartBtn = document.querySelector(".details__button"); //es un elemento que no cambia
let cartNotification = document.querySelector(".header__cart--notification"); //este valor si cambia

//cuando se hace click al boton se ejecuta
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span> `; //innerHTML porque insertamos etiqueta html
  //usamos innerTex porque modificamos el texto de la etiqueta
  //cartNotification.innerText = userInputNumber;
  //no es innerHTMl porque no vamos a poner etiqueta de html, no usamos porque ya tenemos
  //esta notificacion del carrito esta oculta por css
  //  PARA MODIFICAR LOS ESTILOS
  //console.log(cartNotification); //mostramos todo el elemento

  //MI METODO
  /* let acumulador = 0;
  acumulador += userInputNumber;
  cartNotification.innerText = acumulador; */
});

//Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
let priceModal = document.querySelector(".cart-modal__price");

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show"); //se agrega y quita la clase  por cada click
  //ES LA FORMA EN LA QUE YO HICE
  /* if (cartModal.style.display === "none") {
    cartModal.style.display = "block";
  } else {
    cartModal.style.display = "none";
  } */
  //.add es para agregar .remove es para quitar clase
  //el .classList es para acceder a la lista de clases que tiene la etiqueta

  //va en parentesis porque es una funcion
  //usamos etiqueta y estamos actualizando los valores
  //Esta de mas porque ya se hace arriba
  //priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue * 125}.00</span> `; //innerHTML porque insertamos etiqueta html
});
//Borrar el contenido del carrito

const deleteProcudctBtn = document.querySelector(".cart-modal__delete");
const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

deleteProcudctBtn.addEventListener("click", () => {
  //remplaza todo su contenido por este texto
  productContainer.innerHTML = '<p class="cart-empty">Yout cart is empty</p>';
  lastValue = 0;
  cartNotification.innerText = lastValue;
});
//Para aparecer el menu modal

/* const agregarMenu = document.querySelector(".header__menu");
const menu = document.querySelector(".modal-navbar__background");
const cerrar = document.querySelector(".modal-navbar__close-icon");

agregarMenu.addEventListener("click", () => {
  menu.style.display = "block";
});
cerrar.addEventListener("click", () => {
  menu.style.display = "none";
});
 */
