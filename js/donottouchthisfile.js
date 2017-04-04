var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  /*Agregué eventos en el main.js fuera de validateForm(),
    por eso ya no es necesaria la función*/
  // validateForm()
  funciona();
});
