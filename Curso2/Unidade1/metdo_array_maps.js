const arr = [1,2,3,4,5];

const dobroarr =  arr.map(item => item *2);

console.log(dobroarr); // [2, 4, 6, 8, 10]

const alunos = [
    {nome: "Joao",idade:15,notas:[7,8,9]},
    {nome: "Maria",idade:14,notas:[10,9,8]},
    {nome: "Vitor",idade:12,notas:[6,7,8]},
]

const alunosComMedia = alunos.map(
    aluno => {
        let somaNotas = 0
        aluno.notas.forEach(nota => somaNotas += nota)
        const media = somaNotas / aluno.notas.length;

        return {
            nome: aluno.nome,
            idade: aluno.idade,
            media: media
        }
    })

    alunos.forEach(aluno => console.log(aluno))
    console.log("----------------------------------------")
    alunosComMedia.forEach(aluno => console.log(aluno))