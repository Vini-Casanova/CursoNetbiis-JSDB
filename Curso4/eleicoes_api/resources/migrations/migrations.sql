DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'candidato') THEN
        CREATE TABLE candidato (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            numero INT NOT NULL UNIQUE,
            partido VARCHAR(50) NOT NULL
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'eleicao') THEN
        CREATE TABLE eleicao (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            data DATE NOT NULL,
            descricao TEXT
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'eleitor') THEN
        CREATE TABLE eleitor (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            cpf VARCHAR(11) UNIQUE NOT NULL,
            senha VARCHAR(255) NOT NULL
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'voto') THEN
        CREATE TABLE voto (
            id SERIAL PRIMARY KEY,
            eleicao_id INT NOT NULL REFERENCES eleicao(id) ON DELETE CASCADE,
            eleitor_id INT NOT NULL REFERENCES eleitor(id) ON DELETE CASCADE,
            data_hora TIMESTAMP DEFAULT NOW(),
            numero INT NOT NULL,
            FOREIGN KEY (numero) REFERENCES candidato(numero) ON DELETE CASCADE
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'candidato_eleicao') THEN
        CREATE TABLE candidato_eleicao (
            id SERIAL PRIMARY KEY,
            eleicao_id INT NOT NULL REFERENCES eleicao(id) ON DELETE CASCADE,
            candidato_id INT NOT NULL REFERENCES candidato(id) ON DELETE CASCADE
        );
    END IF;
END $$;




-- Inserts into candidato table
INSERT INTO candidato (nome, numero, partido) VALUES 
    ('João Silva', 101, 'Partido A'),
    ('Maria Oliveira', 202, 'Partido B');

-- Inserts into eleicao table
INSERT INTO eleicao (nome, data, descricao) VALUES 
    ('Eleição Presidencial 2024', '2024-10-02', 'Eleição para o cargo de Presidente da República'),
    ('Eleição Municipal 2024', '2024-11-15', 'Eleição para Prefeitos e Vereadores');

-- Inserts into eleitor table
INSERT INTO eleitor (nome, cpf, senha) VALUES 
    ('Carlos Almeida', '12345678901', 'senha123'),
    ('Ana Costa', '09876543210', 'senha456');

-- Inserts into voto table
INSERT INTO voto (eleicao_id, eleitor_id, numero) VALUES 
    (1, 1, 101),
    (2, 2, 202);

-- Inserts into candidato_eleicao table
INSERT INTO candidato_eleicao (eleicao_id, candidato_id) VALUES 
    (1, 1),
    (2, 2);
