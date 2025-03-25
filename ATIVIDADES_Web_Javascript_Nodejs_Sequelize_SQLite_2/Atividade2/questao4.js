const cidades = [
    "São Paulo", 
    "Rio de Janeiro", 
    "Belo Horizonte", 
    "Curitiba", 
    "Porto Alegre", 
    "Salvador", 
    "Brasília", 
    "Fortaleza"
  ];

  function exibirCidades() {
    const lista = document.getElementById("cidade-lista");
    lista.innerHTML = "";
    cidades.sort();
    cidades.forEach(cidade => {
      const item = document.createElement("li");
      item.textContent = cidade;
      lista.appendChild(item);
    });
  }

  function exibirCidadesReverse() {
    const lista = document.getElementById("cidade-lista-reverse");
    lista.innerHTML = "";
    cidades.slice().reverse().forEach(cidade => {
      const item = document.createElement("li");
      item.textContent = cidade;
      lista.appendChild(item);
    });
  }

  function verificarCidade() {
    const cidadeInput = document.getElementById("cidade-input").value.trim();
    const resultado = document.getElementById("resultado");
    
    if (cidadeInput === "") {
      resultado.textContent = "Por favor, digite o nome de uma cidade.";
      resultado.style.color = "red";
      return;
    }
    
    const cidadeEncontrada = cidades.some(cidade => cidade.toLowerCase() === cidadeInput.toLowerCase());

    if (cidadeEncontrada) {
      resultado.textContent = `"${cidadeInput}" está na lista de cidades.`;
      resultado.style.color = "green";
    } else {
      resultado.textContent = `"${cidadeInput}" não está na lista de cidades.`;
      resultado.style.color = "red";
    }
  }

  exibirCidades();
  exibirCidadesReverse();