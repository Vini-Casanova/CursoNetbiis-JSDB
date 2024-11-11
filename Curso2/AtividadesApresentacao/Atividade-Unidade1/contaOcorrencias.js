let numeros = [1,2,2,3,3,4,5,6,7,82,2,2,2,6,7,8,9]


function ocorrencias(arr,num) {
    return arr.reduce((contador, numero) => { return numero === num ? contador + 1 : contador;}, 0);
}

console.log(ocorrencias(numeros, 2));