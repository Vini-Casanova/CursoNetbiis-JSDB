const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", number => {
    let num = parseInt(number)
    
    if (num > 18) {
        console.log('Maior de idade')
    }
    reader.close()
})