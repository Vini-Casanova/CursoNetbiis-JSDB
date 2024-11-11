const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

reader.question("Digite um numero: ", numero => {
    let contador = 0;
    let result =0;

    if(Number(numero) > 0){
        while (contador< Number(numero)){
            contador++
            result+= contador;
        }
        console.log(`A soma de todos os numeros de 1 ate ${numero} é ${result}`);
    }else{
        console.log("Numero precisa ser maior que 0");
    }
    

    reader.close()
})

