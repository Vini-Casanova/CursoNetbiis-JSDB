const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", number => {
    let num = parseInt(number)
    
    if (num > 100) {
        console.log(`Valor a ser pago $ ${num*0.9}`)
    }else{
        console.log(`Valor a ser pago $ ${num}`)
    }
    reader.close()
})