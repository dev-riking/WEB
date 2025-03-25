document.getElementById("cep").addEventListener("blur", function () {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          alert("CEP não encontrado.");
        } else {
          document.getElementById("endereco").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("estado").value = data.uf;
        }
      })
      .catch((error) => alert("Erro ao buscar o CEP. Tente novamente."));
  } else {
    alert("Por favor, insira um CEP válido.");
  }
});

document
  .getElementById("formCadastro")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("endereco", endereco);
    localStorage.setItem("senha", senha);

    window.location.href = "questao2-1.html";
  });
