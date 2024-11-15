import * as CandidatosService from "../services/CandidatosService.js";

export async function listarTodosCandidatos(req, res) {
    const candidatos = await CandidatosService.listarCandidatos();
    return res.send(candidatos);
}

export async function buscarCandidatosPorEleicao(req, res) {
    const candidato = await CandidatosService.buscarCandidatosPorEleicaoId(req.params.id);
    res.send(candidato);
}

export async function buscarCandidato(req, res) {
    const candidato = await CandidatosService.buscarCandidatoPorId(req.params.id);
    res.send(candidato);
}

export async function criarCandidato(req, res,next) {
    try {
        const body = req.body;
        await CandidatosService.criarCandidato(body);
        res.status(201).json('Candidato criado');
    } catch (error) {
        next(error);
    }
}

export async function atualizarCandidato(req, res, next) {
    try {
        const body = req.body;
        body.id = req.params.id;
        await CandidatosService.atualizarCandidato(body);
        res.send({ message: "Candidato " + req.params.id + " atualizado" });
    } catch (error) {
        next(error);
    }
}

export async function deletarCandidato(req, res, next) {
    try {
        await CandidatosService.deletarCandidato(req.params.id);
        res.status(200).send({ message: `Candidato ${req.params.id} deletado com sucesso.` });
    } catch (error) {
        next(error);
    }
}
