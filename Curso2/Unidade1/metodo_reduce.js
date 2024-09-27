let arr =[ 1,2,3,4,5];

let soma = arr.reduce((acumulator,valor) => acumulator + valor);
console.log(soma);

let acumulator = 0;

for (let valorAtual of arr) {
    acumulator += valorAtual;
}

console.log(acumulator);