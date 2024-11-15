CREATE TABLE candidato (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    numero INT NOT NULL UNIQUE,
    partido VARCHAR(50) NOT NULL
);

CREATE TABLE eleicao (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    descricao TEXT
);

CREATE TABLE eleitor (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE voto (
    id SERIAL PRIMARY KEY,
    eleicao_id INT NOT NULL REFERENCES eleicao(id) ON DELETE CASCADE,
    eleitor_id INT NOT NULL REFERENCES eleitor(id) ON DELETE CASCADE,
    data_hora TIMESTAMP DEFAULT NOW(),
    numero INT NOT NULL,
    FOREIGN KEY (numero) REFERENCES candidato(numero) ON DELETE CASCADE
);

CREATE TABLE candidato_eleicao (
    id SERIAL PRIMARY KEY,
    eleicao_id INT NOT NULL REFERENCES eleicao(id) ON DELETE CASCADE,
    candidato_id INT NOT NULL REFERENCES candidato(id) ON DELETE CASCADE
);
