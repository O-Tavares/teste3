let num = 0
function mostrarMensagem() {
  num++
  let message = `Você clicou no botão ${num} vez${num === 1 ? '' : 'es'}! 🎉`;
  alert(message);
  document.title = `Cliques: ${num}`;
}

