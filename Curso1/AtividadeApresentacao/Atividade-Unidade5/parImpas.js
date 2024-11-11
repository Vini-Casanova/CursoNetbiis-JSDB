const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", number => {
    let num = parseInt(number)
    
    if (num % 2 === 0) {
        console.log('O número é par.')
    } else {
        console.log('O número é ímpar.')
    }
    reader.close()
})