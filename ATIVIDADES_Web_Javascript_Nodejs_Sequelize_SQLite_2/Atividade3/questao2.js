let entradaAtual = "0";
let entradaAnterior = "";
let operador = null;

function adicionarValor(valor) {
  if (entradaAtual === "0") {
    entradaAtual = valor.toString();
  } else {
    entradaAtual += valor.toString();
  }
  atualizarDisplay();
}

function definirOperacao(op) {
  if (entradaAnterior === "") {
    entradaAnterior = entradaAtual;
    entradaAtual = "0";
    operador = op;
  } else {
    calcular();
    operador = op;
    entradaAnterior = entradaAtual;
    entradaAtual = "0";
  }
}

function limparDisplay() {
  entradaAtual = "0";
  entradaAnterior = "";
  operador = null;
  atualizarDisplay();
}

function calcular() {
  let resultado;
  const anterior = parseFloat(entradaAnterior);
  const atual = parseFloat(entradaAtual);

  if (operador === "+") {
    resultado = anterior + atual;
  } else if (operador === "-") {
    resultado = anterior - atual;
  } else if (operador === "*") {
    resultado = anterior * atual;
  } else if (operador === "/") {
    resultado = anterior / atual;
  } else if (operador === "^") {
    resultado = Math.pow(anterior, atual);
  } else if (operador === "sqrt") {
    resultado = Math.sqrt(atual);
  }

  entradaAtual = resultado.toString();
  entradaAnterior = "";
  operador = null;
  atualizarDisplay();
}

function atualizarDisplay() {
  document.getElementById("display").innerText = entradaAtual;
}
