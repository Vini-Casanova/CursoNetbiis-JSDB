import pool from "../config/dbConfig.js";

export async function listarCandidatos() {
    const result = await pool.query('SELECT * FROM candidatos');
    return result.rows;
}

export async function obterCandidato(id) {
    const result = await pool.query('SELECT * FROM candidatos WHERE id = $1', [id]);
    return result.rows[0] ?? false;
}

export async function obterCandidatoPorNumero(numero) {
    const result = await pool.query('SELECT * FROM candidatos WHERE numero = $1', [numero]);
    return result.rows[0] ?? false;
}

export async function criarCandidato(candidato) {
    const result = await pool.query('INSERT INTO candidatos (numero, nome, partido) VALUES ($1, $2, $3)', [candidato.numero, candidato.nome, candidato.partido]);
    return result.rows[0] ?? false;
}

export async function atualizarCandidato(id, candidato) {
    const result = await pool.query('UPDATE candidatos SET numero = $1, nome = $2, partido = $3 WHERE id = $4', [candidato.numero, candidato.nome, candidato.partido, id]);
    return result.rows[0] ?? false;
}

export async function deletarCandidato(id) {
    const result = await pool.query('DELETE FROM candidatos WHERE id = $1', [id]);
    return result.rows[0] ?? false;
}