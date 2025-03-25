let listaDeItens = [];

function atualizarCampo(opcao) {
    const campoTexto = document.getElementById("campoTexto");

    if (opcao === 'adicionar') {
        campoTexto.placeholder = "Digite um valor para adicionar";
    } else if (opcao === 'excluirUltimo') {
        campoTexto.placeholder = "Clique para excluir o último valor";
    } else if (opcao === 'excluirEspecifico') {
        campoTexto.placeholder = "Digite o valor específico para excluir";
    }
}

function executarAcao() {
    const campoTexto = document.getElementById("campoTexto");
    const valor = campoTexto.value.trim();

    const opcoes = document.getElementsByName("opcao");
    let acaoSelecionada = '';

    for (let opcao of opcoes) {
        if (opcao.checked) {
            acaoSelecionada = opcao.value;
            break;
        }
    }

    if (acaoSelecionada === 'adicionar') {
        if (valor) {
            listaDeItens.push(valor);
            campoTexto.value = '';
            exibirLista();
        } else {
            alert("Por favor, digite um valor para adicionar.");
        }
    } else if (acaoSelecionada === 'excluirUltimo') {
        if (listaDeItens.length > 0) {
            listaDeItens.pop();
            exibirLista();
        } else {
            alert("A lista está vazia.");
        }
    } else if (acaoSelecionada === 'excluirEspecifico') {
        if (valor) {
            const lista = listaDeItens.indexOf(valor);
            if (lista !== -1) {
                listaDeItens.splice(lista, 1);
                exibirLista();
            } else {
                alert("Valor não encontrado na lista.");
            }
        } else {
            alert("Digite um valor para excluir.");
        }
    } else {
        alert("Por favor, selecione uma opção.");
    }
}

function exibirLista() {
    const ul = document.getElementById("lista");
    ul.innerHTML = '';

    listaDeItens.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}