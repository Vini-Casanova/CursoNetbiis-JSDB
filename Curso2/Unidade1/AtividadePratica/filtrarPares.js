let numeros = [1,2,3,4,5,6,7,8,9,10,11]

function filtrarPares(arr) {
    return arr.filter(numero => numero%2 == 0)
}

console.log(filtrarPares(numeros));