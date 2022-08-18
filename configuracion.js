let input = document.getElementById("input");
let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let copiar = document.getElementById("btn-copy");
let answer = document.getElementById("answer");





//ENCRIPTAR EL MENSAJE
function encriptarFn() {
  let frase = input.value;
  let fraseEncriptadaarr = [];

  for (let i = 0; i < frase.length; i++) {
    let letra;
    switch (frase[i]) {
      case "a":
        letra = "ai";
        break;
      case "e":
        letra = "enter";
        break;
      case "i":
        letra = "imes";
        break;
      case "o":
        letra = "ober";
        break;
      case "u":
        letra = "ufat";
        break;
      default:
        letra = frase[i];
        break;
    }
    fraseEncriptadaarr.push(letra);
  }

  frase = fraseEncriptadaarr.join("");
  
  answer.innerHTML = frase;

  copiar.style.display = "block";

  
  document.getElementById("message-card").style.display = "none";
  document.getElementById("message-answer").style.display = "flex";

}

//DESENCRIPTAR EL MENSAJE
function desencriptarFn() {
  let frase = input.value.toLowerCase();

  let contador = 0;
  while (contador < frase.length) {
    if (frase.includes("ai")) {
      frase = frase.replace("ai", "a");
    }
    if (frase.includes("enter")) {
      frase = frase.replace("enter", "e");
    }
    if (frase.includes("imes")) {
      frase = frase.replace("imes", "i");
    }
    if (frase.includes("ober")) {
      frase = frase.replace("ober", "o");
    }
    if (frase.includes("ufat")) {
      frase = frase.replace("ufat", "u");
    }
    contador++;
  }
  answer.innerHTML = frase;
  copiar.style.display = "block";

  document.getElementById("message-card").style.display = "none";
  document.getElementById("message-answer").style.display = "flex";
}

function validarCampo(campo) {

  //let regEx = /[a-z]/gm;
  let regEx = /^[a-z][^A-Z]+$/gm;
  let bandera = false;

  if (regEx.test(campo)) {



    input.classList.remove("error");

    document.querySelector(".text-error").style.display = "none";

    bandera = true;

 
  } else {
    input.classList.add("error");

    document.querySelector(".text-error").style.display = "block";

    bandera = false;
  }

  return bandera;

}


encriptar.addEventListener("click", (event) => {
  event.preventDefault();

  validarCampo(input.value);

  if (validarCampo(input.value) == false) {
    console.log(validarCampo(input.value));
    document.getElementById("message-card").style.display = "flex";
    document.getElementById("message-answer").style.display = "none";
    input.value = "";
    input.focus();

  }
  else if(validarCampo(input.value) == true) { 
    encriptar.onclick = encriptarFn();
    input.value = "";
    input.focus();
  }


  })



desencriptar.addEventListener("click", (event) => {
  event.preventDefault();

  validarCampo(input.value);

  if (validarCampo(input.value) == false) {
    console.log(validarCampo(input.value));
    document.getElementById("message-card").style.display = "flex";
    input.value = "";

  }
  else if(validarCampo(input.value) == true) { 
    desencriptar.onclick = desencriptarFn();
    document.getElementById("message-card").style.display = "none";
    input.value = "";
  }


});


//COPIAR EL MENSAJE
function copiarFn() {
  let content = document.getElementById("answer").innerText;
  content.select;
  navigator.clipboard.writeText(content);
}

copiar.onclick = copiarFn