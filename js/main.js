function validateForm(){

  var nombre = document.getElementById('name');
  var apellido = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var selecciona = document.getElementById('selecciona');
  var twitter = document.getElementById('input-social');
  var soloLetras = /^([a-zñA-Zá-ú+\s])*$/;
  var rightEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var mayus = /^[A-Z]{1}/
  var span = document.getElementsByTagName('span')

  //Para modificar la primera letra a mayuscula
  function validando(elem){
    var info = elem.value.split(" ");
    var modifMayus = "";
    info.forEach(function(e){
      modifMayus +=  e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()+" ";
    });
    elem.value = modifMayus;
  }

  if(nombre.value.length == 0){
    span[0].style.display = "block";
  } else {
    if(!soloLetras.test(nombre.value)){
      span[0].innerHTML = "Ingrese solo letras"
      span[0].style.display = "block";
    } else {
      validando(nombre);
      span[0].style.display = "none";
    }
  }

  if(apellido.value.length == 0){
    span[1].style.display = "block";
  } else {
    if(!soloLetras.test(apellido.value)){
      span[1].innerHTML = "Ingrese solo letras"
      span[1].style.display = "block";
    } else {
      validando(apellido);
      span[1].style.display = "none";
    }
  }

  if(email.value.length == 0){
    email.setAttribute('required',"required");
    span[2].style.display = "block";
  } else {
    if(!rightEmail.test(email.value)){
      span[2].innerHTML = "Ingresa un email válido"
      span[2].style.display = "block";
    } else {
      span[2].style.display = "none";
    }
  }

  //contraseña
  if(password.value.length<6||password.value.length>20){
    span[3].style.display = "block";
  } else if(password.value=="password"||password.value=="123456"||password.value=="098765"){
    span[3].innerHTML = "La contraseña "+"'"+password.value+"'"+" no está permitida"
    span[3].style.display = "block";
  }
   else {
    span[3].style.display = "none";
  }

  //Bicis
  if(selecciona.value == "0"){
    span[4].style.display = "block";
  } else {
    span[4].style.display = "none";
  }

}
