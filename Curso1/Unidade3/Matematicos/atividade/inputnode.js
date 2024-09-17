const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", name => {
    console.log(`Hello ${name}`)
    reader.close()
})