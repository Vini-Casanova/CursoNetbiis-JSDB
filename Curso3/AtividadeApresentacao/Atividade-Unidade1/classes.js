class Nota {
    constructor(disciplina, valor) {
        this.disciplina = disciplina;
        this.valor = valor;
    }
}

class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
    }

    adicionarNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length === 0) return 0;
        let soma = this.notas.reduce((acc, nota) => acc + nota.valor, 0);
        return soma / this.notas.length;
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Média: ${this.calcularMedia().toFixed(2)}`);
    }
}

const aluno = new Aluno('João Silva', '12345');
aluno.adicionarNota(new Nota('Matemática', 8));
aluno.adicionarNota(new Nota('Português', 7));
aluno.adicionarNota(new Nota('História', 9));
aluno.exibirDados();