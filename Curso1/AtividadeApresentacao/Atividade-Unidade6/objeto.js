const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Engenheiro",
    estadoCivil: "Solteiro"
};

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}