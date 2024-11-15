import * as CandidatosRepository from "../repositories/CandidatosRepository.js"
import AppError from '../errors/AppError.js';
export async function listarCandidatos() {
    return await CandidatosRepository.listarCandidatos();
}

export async function buscarCandidatoPorId(id) {
    return await CandidatosRepository.buscarCandidato(id);
}

export async function obterCandidato(id, eleicaoId) {
    const res = await CandidatosRepository.obterCandidato(id, eleicaoId);
    return res;
}

export async function buscarCandidatosPorEleicaoId(id) {
    console.log(id);
    return await CandidatosRepository.listarCandidatosPorEleicao(id);
}

export function criarCandidato(candidato) {
    return CandidatosRepository.criarCandidato(candidato);
}

export async function atualizarCandidato(candidato) {
    const candidatoBase = await CandidatosRepository.buscarCandidato(candidato.id);
        if (!candidatoBase) {
            throw new AppError('Candidato não encontrado', 404);
        }
    return CandidatosRepository.atualizarCandidato(candidato)
}

export async function deletarCandidato(id) {
        const candidato = await CandidatosRepository.buscarCandidato(id);
        if (isNull) {
            throw new AppError('Candidato não encontrado', 404);
        }
        return CandidatosRepository.deletarCandidato(id);
}
