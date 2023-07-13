//Cambio de cantidad de articulos ingresado por el usuario 
let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;
//le decimos que plusBtn.addEnventListener va a escuchar lo que se hace  primero va el evento y luego lo que se hara
plusBtn.addEventListener('click', () => {
  userInputNumber++;
  //usamos values porque es el atributo que definimos en este input
  userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});
