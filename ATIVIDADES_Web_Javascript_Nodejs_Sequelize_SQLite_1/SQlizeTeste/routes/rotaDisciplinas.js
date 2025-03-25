import express from "express"
import { mostrarDisciplinas, mostrarDisciplina, cadastrarDisciplina, atualizarDisciplina, deletarDisciplina } from "../controller/controllerDisciplina.js"

const appbd = express()
appbd.use(express.json())

appbd.get('/visualizar', mostrarDisciplinas)

appbd.get('/visualizar/:codigo', mostrarDisciplina)

appbd.post('/cadastrar', cadastrarDisciplina)

appbd.put('/atualizar/:codigo', atualizarDisciplina)

appbd.delete('/remover/:codigo', deletarDisciplina)

export default appbd