let num = 0
let memtrue = 0
function mostrarMensagem() {
  num++
  document.title = `Ouro: ${num}`;
  const titulo = document.querySelector("h1");
  titulo.textContent =  `${num}`;
}

