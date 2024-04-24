let contador = document.getElementById("value");
let numero = 0;
contador.innerHTML = numero;
function adicao() {
  contador = document.getElementById("value");
  contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

function diminuir() {
  contador = document.getElementById("value");
  contador.innerHTML = parseInt(contador.innerText) - 1;
}

function zerar() {
  contador = 0;
  document.getElementById("value").textContent = "0";
}
