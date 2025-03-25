document.getElementById("adicionar").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const profissao = document.getElementById("profissao").value;
  const endereco = document.getElementById("endereco").value;

  if (!nome || !telefone || !email || !dataNascimento) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const tbody = document.getElementById("userTableBody");
  const row = tbody.insertRow();

  row.innerHTML = `
                <td data-label="Nome: ">${nome}</td>
                <td data-label="Telefone: ">${telefone}</td>
                <td data-label="Email: ">${email}</td>
                <td data-label="Data de Nascimento: ">${dataNascimento}</td>
                <td data-label="Profissão: ">${profissao}</td>
                <td data-label="Endereço: ">${endereco}</td>
                <td data-label="Ações">
                    <button class="btn btn-edit">Editar</button>
                    <button class="btn btn-delete">Excluir</button>
                </td>
            `;

  row.querySelector(".btn-edit").addEventListener("click", function () {
    document.getElementById("nome").value = nome;
    document.getElementById("telefone").value = telefone;
    document.getElementById("email").value = email;
    document.getElementById("dataNascimento").value = dataNascimento;
    document.getElementById("profissao").value = profissao;
    document.getElementById("endereco").value = endereco;
    tbody.removeChild(row);
  });

  row.querySelector(".btn-delete").addEventListener("click", function () {
    tbody.removeChild(row);
  });

  document.getElementById("userForm").reset();
});
