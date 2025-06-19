let num = 0
let memtrue = 0
function mostrarMensagem() {
  num++
  document.title = `Cliques: ${num}`;
  const titulo = document.querySelector("h1");
  titulo.textContent = `Você clicou ${num} vez${num === 1 ? '' : 'es'}!`;
}

