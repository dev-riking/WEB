import express from "express";
import path from "path";

const app = express();
const porta = 8080;
const host = "localhost";

app.use(express.json());

// Usando um Map para armazenar os carros
const Carros = new Map([
  [
    "1234XYZ",
    {
      codigo: "1234XYZ",
      nome: "BMW X5",
      preco: "R$ 299.999,00",
      categoria: "SUV",
    },
  ],
  [
    "5678ABC",
    {
      codigo: "5678ABC",
      nome: "Audi A4",
      preco: "R$ 159.999,00",
      categoria: "Sedan",
    },
  ],
  [
    "9101DEF",
    {
      codigo: "9101DEF",
      nome: "Ford Mustang",
      preco: "R$ 199.999,00",
      categoria: "Esportivo",
    },
  ],
  [
    "1122GHI",
    {
      codigo: "1122GHI",
      nome: "Chevrolet Tracker",
      preco: "R$ 139.999,00",
      categoria: "SUV",
    },
  ],
]);

// Retorna todos os carros
app.get("/carros", (req, res) => {
  res.json(Array.from(Carros.values()));
});

// Retorna um carro específico pela matrícula
app.get("/carro/:codigo", (req, res) => {
  const carro = Carros.get(req.params.codigo);
  if (carro) {
    res.json(carro);
  } else {
    res.status(404).send({ mensagem: "Carro não encontrado." });
  }
});

// Retorna todos os carros de uma categoria específica
app.get("/carros/categoria/:categoria", (req, res) => {
  const categoria = req.params.categoria.toLowerCase();
  const filtrados = Array.from(Carros.values()).filter(
    (c) => c.categoria.toLowerCase() === categoria
  );
  res.json(filtrados);
});

// Adiciona um novo carro
app.post("/carro", (req, res) => {
  const { codigo, nome, preco, categoria } = req.body;
  if (!codigo || !nome || !preco || !categoria) {
    return res
      .status(400)
      .send({
        mensagem:
          "Todos os campos (codigo, nome, preco, categoria) são obrigatórios.",
      });
  }
  if (Carros.has(codigo)) {
    return res.status(400).send({ mensagem: "Matrícula já existente." });
  }
  Carros.set(codigo, { codigo, nome, preco, categoria });
  res.status(201).json(Carros.get(codigo));
});

// Atualiza todos os dados de um carro existente
app.put("/carro/:codigo", (req, res) => {
  const { codigo } = req.params;
  if (!Carros.has(codigo)) {
    return res.status(404).send({ mensagem: "Carro não encontrado." });
  }
  const { nome, preco, categoria } = req.body;
  if (!nome || !preco || !categoria) {
    return res
      .status(400)
      .send({
        mensagem: "Todos os campos (nome, preco, categoria) são obrigatórios.",
      });
  }
  Carros.set(codigo, { codigo, nome, preco, categoria });
  res.json(Carros.get(codigo));
});

// Atualiza dados específicos de um carro existente
app.patch("/carro/:codigo", (req, res) => {
  const { codigo } = req.params;
  if (!Carros.has(codigo)) {
    return res.status(404).send({ mensagem: "Carro não encontrado." });
  }
  const carro = Carros.get(codigo);
  Object.assign(carro, req.body);
  Carros.set(codigo, carro);
  res.json(carro);
});

// Remove um carro específico pela matrícula
app.delete("/carro/:codigo", (req, res) => {
  const { codigo } = req.params;
  if (Carros.delete(codigo)) {
    res.status(204).send();
  } else {
    res.status(404).send({ mensagem: "Carro não encontrado." });
  }
});

// Rota para exibir o index.html
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});

app.listen(porta, host, () => {
  console.log(`Servidor rodando em: http://${host}:${porta}`);
});
