import { error } from "console"
import express from "express"
import path from "path"
import rotadisciplinas from './routes/rotaDisciplinas.js'
import sequelize, { syncDatabase } from "./config/bd.js"
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const porta = process.env.port
const host = process.env.host

syncDatabase()

app.set('view engine', 'ejs')
app.set('view', './views')

app.use(express.static(path.resolve('public')))
app.use(express.urlencoded({extended: true}))

app.use(express.json());

app.use('/disciplinas', rotadisciplinas)

// const alunos = []
// const aluno = { "matricula": "a123456", "nome": "erik", "turma": "DS", "email": "erikbandeira@gmail.com" }
// alunos.push(aluno)

// app.get("/alunos", (req, res) => {
//     res.json(alunos)
// })

// app.get("/aluno/:matricula", (req, res) => {
//     const parametro = req.params.matricula // permite apenas 1 parametro
//     //const {matricula} = req.params -> permite acessar mais de 1 parametro 
//     const aluno = alunos.find((aluno) => aluno.matricula == parametro)
//     if (!aluno) {
//         res.status(500).json({ error: "Aluno não encontrado!" })
//         return
//     }

//     res.status(200).json({ message: "Aluno encontrado!", aluno })
// })

// app.post('/aluno', (req, res) => {
//     const aluno = req.body
//     if (!aluno) {
//         res.status(500).json({ error: 'Nada foi enviado' })
//         return
//     }
//     alunos.push(aluno)
//     res.status(200).json({ msg: 'Aluno adicionado!' })
// })

// app.put('/aluno/:matricula', (req, res) => {
//     const { matricula } = req.params
//     const { nome, email, turma } = req.body

//     //busca aluno
//     const aluno = alunos.find((aluno) => aluno.matricula.toLowerCase() == matricula.toLowerCase())

//     //Verifica se aluno existe
//     if (!aluno) {
//         res.status(500).json({ error: "Aluno não encontrando!" })
//         return
//     }
    
//     //Alterando propriedades do objeto
//     aluno.nome = nome;
//     aluno.email = email;
//     aluno.turma = turma;
//     res.status(200).json({ message: "Aluno editado!", novoAluno: aluno })
// })

// app.delete('/aluno/:matricula', (req, res) => {
//     const { matricula } = req.params
//     //busca indice do aluno no array
//     const aluno = alunos.findIndex((item) => item.matricula.toLowerCase() == matricula.toLowerCase())
//     //Verifica se aluno existe 
//     if (!aluno == undefined) {
//         res.status(500).json({ error: "Aluno não encontrado!" })
//         return
//     }
//     //removendo aluno do array
//     alunos.splice(aluno, 1)
//     res.status(200).json({ message: "Aluno Excluido" })
// })

// app.patch('/aluno/:matricula', (req, res) => {
//     const { matricula } = req.params
//     const oIdAluno = req.body
//     //Pega os campos do corpo
//     const chaves = Object.keys(oIdAluno)
//     // Busca aluno no array
//     const aluno = alunos.find((aluno) => aluno.matricula.toLowerCase() == matricula.toLowerCase())
//     // Verifica aluno
//     if (!aluno) {
//         res.status(500).json({ error: "Aluno não encontrado!" })
//         return
//     }

//     //Editando
//     chaves.forEach((chave) => {
//         if (aluno[chave]) {
//             aluno[chave] = oIdAluno[chave]
//         }
//     })
//     res.status(200).json({
//         message: "Alela!", newAluno: aluno


//     })
// })

// app.get("/", (req, res) => {
//     res.send("<h1> alela</h1>")
// })

// app.get("/teste", (req, res) => {
//     res.sendFile(path.resolve("./index.html"))
// })

// app.post('/user', (req, res) => {
//     const user = req.body
    
//     if (!user) {
//         res.status(500).json({ error: 'Nada foi enviado!' })
//         return
//     }
//     if (user.nome == "Marcos" || user.nome == "Erik") {
//         res.status(401).json({ message: 'Não autorizado' })
//         return
//     }

//     res.status(200).json(user);
// })

app.listen(porta, host, () => {
    console.log(`acessou o servidor: http://${host}:${porta}`)
})