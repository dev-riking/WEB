import Disciplina from "../models/modelDisciplina.js";

export const mostrarDisciplinas = async (req, res) => {
    const disciplinas = await Disciplina.findAll()
    // res.status(200).json({ msg: 'Disciplinas encontradas', disciplinas })
    res.render('visualizarDisciplina', {disciplinas: disciplinas})
}

export const mostrarDisciplina = async (req, res) => {
    const { codigo } = req.params
    const disciplina = await Disciplina.findByPk(codigo)
    if (!disciplina) {
        res.status(404).json({ msg: 'Disciplina não encontrada!' })
        return
    }
    res.status(200).json({ msg: 'Disciplina encontrada!', disciplina })
}

export const cadastrarDisciplina = async (req, res) => {
    const { codigo, nome, ch, professor } = req.body
    const disciplina = await Disciplina.create({ codigo, nome, ch, professor })
    if(disciplina){
    //res.status(200).json({ msg: 'Disciplina criada com sucesso!', disciplina })
    res.redirect('/disciplinas/visualizar')
    }else{
        res.status(404).json({msg: 'Disciplina não encontrada!'})
    }
}

export const atualizarDisciplina = async (req, res) => {
    const { codigo } = req.params
    const { nome, ch, professor } = req.body
    const disciplina = await Disciplina.findByPk(codigo)
    if (disciplina) {
        // disciplina.nome = nome
        // disciplina.ch = ch
        // disciplina.professor = professor
        // await disciplina.save()
        await disciplina.update({ nome, ch, professor }, { where: { codigo: codigo } })
        res.status(200).json({ msg: "Disciplina atualizada com sucesso!" })
    } else {
        res.status(404).json({ msg: "Disciplina não encontrada" })
    }
}

export const deletarDisciplina = async (req, res) => {
    const { codigo } = req.params
    const disciplina = await Disciplina.findByPk(codigo)
    if (disciplina) {
        disciplina.destroy()
        res.status(200).json({ msg: "Disciplina deletada com sucesso!" })
    } else {
        res.status(404).json({ msg: "Disciplina não deletada" })
    }
}