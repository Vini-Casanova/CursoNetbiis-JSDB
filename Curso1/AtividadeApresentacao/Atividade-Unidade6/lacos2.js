const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nota;
let soma = 0;
let contador = 0;

function askNota() {
    reader.question("Digite uma nota de 1 a 10: ", (input) => {
        nota = parseInt(input);
        if (isNaN(nota) || nota < 1 || nota > 10) {
            askNota();
        } else {
            askNumero();
        }
    });
}

function askNumero() {
    reader.question("Digite um número (0 para sair): ", (input) => {
        let numero = parseInt(input);
        if (numero !== 0) {
            soma += numero;
            contador++;
            askNumero();
        } else {
            let media = contador > 0 ? soma / contador : 0;
            console.log("A média dos números inseridos é: " + media);
            reader.close();
        }
    });
}
