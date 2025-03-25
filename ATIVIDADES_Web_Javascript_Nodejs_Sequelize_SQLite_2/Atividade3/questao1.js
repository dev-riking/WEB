document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCompras");
  const listasContainer = document.getElementById("listas");
  const listasDeCompras = {};

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const categoria = document.querySelector(
      'input[name="categoria"]:checked'
    ).value;
    const item = document.getElementById("entradaItem").value.trim();

    if (!item) {
      alert("Por favor, insira um item válido.");
      return;
    }

    if (!listasDeCompras[categoria]) {
      listasDeCompras[categoria] = [];
    }

    listasDeCompras[categoria].push(item);

    document.getElementById("entradaItem").value = "";

    mostrarListas();
  });

  function mostrarListas() {
    listasContainer.innerHTML = "";

    for (let categoria in listasDeCompras) {
      const tituloCategoria = document.createElement("h3");
      tituloCategoria.textContent = categoria;

      const lista = document.createElement("ol");

      listasDeCompras[categoria].forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        lista.appendChild(listItem);
      });

      listasContainer.appendChild(tituloCategoria);
      listasContainer.appendChild(lista);
    }
  }
});
