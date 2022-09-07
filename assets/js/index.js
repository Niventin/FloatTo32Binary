botao = document.querySelector("#botao");
input = document.querySelector("#input");
span = document.querySelector(".spanBinario");
function transformarBinario(numero) {
  binario = "";
  while (Math.trunc(numero) != 0) {
    
    if (Math.trunc(numero) % 2 == 1) {
      binario += "1";
    } else if (Math.trunc(numero) % 2 == 0) {
      binario += "0";
    }
    numero /= 2;
  }
  while (binario.length < 8){
    binario += 0;
  }
  return reverterString(binario);
}

function reverterString(str) {
  return str === "" ? "" : reverterString(str.substr(1)) + str.charAt(0);
}

botao.addEventListener("click", function () {
  numeroemBinario = "";
  contadorExpoente = 0;
  if (input.value == "") {
    return 0;
  }

  xinput = input.value;
  if (xinput >= 1)
  {while (xinput >= 2) {
    contadorExpoente++;
    xinput /= 2;
  }
}
if(xinput < 1){
    while(xinput < 1){
        contadorExpoente--;
        xinput *= 2;
    }
}

  string = "";
  contador = 0;
  while (xinput != 0.0) {
    contador++;
    if (xinput >= 1) {
      xinput -= 1;
    }
    xinput *= 2;
    if (xinput >= 1) {
      string += "1";
    } else if (xinput <= 1) {
      string += "0";
    }
    if (contador == 23) break;
  }
  for (string; string.length < 23; contador++) {
    string += "0";
  }
  input.value > 0 ? (numeroemBinario += "0") : (numeroemBinario += "1");
  numeroemBinario += transformarBinario(contadorExpoente + 127);
  numeroemBinario += string;
  span.innerHTML = numeroemBinario;
});
