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

  drawProductInModal();
  /*priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span> `; //innerHTML porque insertamos etiqueta html
  */

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
//let priceModal = document.querySelector(".cart-modal__price");
const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show"); //se agrega y quita la clase  por cada click
  if (lastValue == 0) {
    productContainer.innerHTML = '<p class="cart-empty">Yout cart is empty</p>';
  } else {
    drawProductInModal();
  }
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
function deleteProduct() {
  const deleteProcudctBtn = document.querySelector(".cart-modal__delete");
  /*cuando llamamos a la funcion,ingresa a la funcion y espera a que
	 se precione el boton delete para hacer lo siguiente*/
  deleteProcudctBtn.addEventListener("click", () => {
    //remplaza todo su contenido por este texto
    productContainer.innerHTML = '<p class="cart-empty">Yout cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
}
//Cambiar imagenes cuando se presione los botones flecha
const imageContainer = document.querySelector(".gallery__image-container");
const previusGalleryBtn = document.querySelector(".gallery__previus");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

nextGalleryBtn.addEventListener("click", () => {
  changeNextImage(imageContainer);
});
previusGalleryBtn.addEventListener("click", () => {
  changePreviusImage(imageContainer);
});

//Mostrar el modal de imagenes cuando hago click

//Funciones
function drawProductInModal() {
  productContainer.innerHTML = `
  	<div class="cart-modal__details-container">
 	 <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
 	 <div>
  <p class="cart-modal__product">Autum Limited Edition</p>
  <p class="cart-modal__price">$125 x3 <span>$375.00</span> </p>
  </div>
  <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="">
  </div>
  <button class="cart-modal__checkout">Checkout</button>
  `;
  deleteProduct(); //borra el producto si se hace click
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span> `; //innerHTML porque insertamos etiqueta html
}
//lo hicimos en funciones porque lo vamos a rehusar
function changeNextImage(imgcontainer) {
  if (imgIndex == 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgcontainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviusImage(imgcontainer) {
  if (imgIndex == 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgcontainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}
//Para aparecer el menu modal

const imageModal = document.querySelector(".modal-gallery__background");
const closeModalBtn= document.querySelector('.modal-gallery__close');

imageContainer.addEventListener("click", () => {
	imageModal.style.display = "grid";
});
closeModalBtn.addEventListener('click',()=>{
	imageModal.style.display='none';
})
//cambiar las imagenes principales desde los thumbnails
let thumbnails=document.querySelectorAll('.gallery__thumnail');
thumbnails=[...thumbnails];//convierto el nodeList a un arreglo

thumbnails.forEach(thumbnails=>{
	thumbnails.addEventListener('click',event=>{

		imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
		
	})
})
//cambiar las imagenes principales desde los thumbnails-MODAL
let modalthumbnail=document.querySelectorAll('.modal-gallery__thumnails');
const modalImageContainer=document.querySelector('.modal-gallery__image-container');
modalthumbnail=[...modalthumbnail];
modalthumbnail.forEach(modalthumbnail=>{
	modalthumbnail.addEventListener('click',event=>{
		
		modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
		//el primer digito desde el final
	})
})

//cambiar imagen principal de modal desde sus flechas
const nextModalBtn=document.querySelector('.modal-gallery__next');
const previusModalBtn=document.querySelector('.modal-gallery__previus');

nextModalBtn.addEventListener("click", () => {
  changeNextImage(modalImageContainer);
});
previusModalBtn.addEventListener("click", () => {
  changePreviusImage(modalImageContainer);
});
 const abrirMenuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".modal-navbar__background");
const cerrarMenuBtn = document.querySelector(".modal-navbar__close-icon");

abrirMenuBtn.addEventListener("click", () => {
  menu.style.display = "block";
});
cerrarMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
});

