const urlParams = new URLSearchParams(window.location.search);
const nomeUsuario = urlParams.get('nome');
document.getElementById("nomeUsuario").innerText = nomeUsuario;