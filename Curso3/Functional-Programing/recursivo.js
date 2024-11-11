function fatorial(n) {
    console.log(`Entrando na função fatorial(${n})`);

    if (n === 0 || n === 1) {
        console.log(`Caso base atingido em fatorial(${n})`);
        return 1;
    } else {
        let resultado = n * fatorial(n - 1);
        console.log(`Calculando fatorial(${n}): ${n} * fatorial(${n - 1}) = ${resultado}`);
        return resultado;
    }
}

const numero = 5;
const resultado = fatorial(numero);
console.log(`Resultado final: fatorial(${numero}) = ${resultado}`);