let num = 0
let memtrue = 0
function mostrarMensagem() {
  num++
  if (memtrue === 1);
    let message = `Você clicou no botão ${num} vez${num === 1 ? '' : 'es'}! 🎉`;
    alert(message);
  document.title = `Cliques: ${num}`;
  const titulo = document.querySelector("h1");
  titulo.textContent = `Você clicou ${num} vez${num === 1 ? '' : 'es'}!`;
}

