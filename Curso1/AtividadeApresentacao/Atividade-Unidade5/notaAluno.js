const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", number => {
    let num = parseInt(number)
    
    if (num >= 7 && num <= 10) {
        console.log('Aprovado')
    }else if (num >= 0 && num < 7) {
        console.log('Reprovado')
    }else {
        console.log('Nota inválida')
    }
    reader.close()
})