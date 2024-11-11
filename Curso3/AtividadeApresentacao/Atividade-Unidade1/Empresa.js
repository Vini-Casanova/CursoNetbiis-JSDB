class Funcionario {
    constructor(nome, cpf, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    calcularSalario() {
        throw new Error("Este método deve ser implementado pelas subclasses");
    }
}

class FuncionarioHorista extends Funcionario {
    constructor(nome, cpf, email, horasTrabalhadas, valorPorHora) {
        super(nome, cpf, email);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorPorHora = valorPorHora;
    }

    calcularSalario() {
        return this.horasTrabalhadas * this.valorPorHora;
    }
}

class FuncionarioMensalista extends Funcionario {
    constructor(nome, cpf, email, salarioMensal, percentualDesconto) {
        super(nome, cpf, email);
        this.salarioMensal = salarioMensal;
        this.percentualDesconto = percentualDesconto;
    }

    calcularSalario() {
        return this.salarioMensal * (1 - this.percentualDesconto / 100);
    }
}

const horista = new FuncionarioHorista("João", "123.456.789-00", "joao@example.com", 160, 50);
const mensalista = new FuncionarioMensalista("Maria", "987.654.321-00", "maria@example.com", 3000, 10);

console.log(`Salário do funcionário horista: R$ ${horista.calcularSalario()}`);
console.log(`Salário do funcionário mensalista: R$ ${mensalista.calcularSalario()}`);