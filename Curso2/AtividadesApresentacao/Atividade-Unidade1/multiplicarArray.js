let numeros = [1, 2, 3, 4, 5, 6, 7, 8]

function multiplicarArray(arr, multiplicador) {
    return arr.map(numero => numero * multiplicador);
}


console.log(multiplicarArray(numeros, 2));


