const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", number => {
    let idade = parseInt(number)

    console.log(`A pessoa com ${idade} anos é classificada como: ${classificarIdade(idade)}`);
    reader.close()
})



function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Criança";
    } else if (idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 64) {
        return "Adulto";
    } else if (idade >= 65) {
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

