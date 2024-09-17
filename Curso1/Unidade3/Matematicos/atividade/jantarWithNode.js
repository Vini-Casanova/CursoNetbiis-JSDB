const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("Digite o valor total do jantar: ", valor1 => {
    let valor = parseFloat(valor1)
    taxa = valor *0.1
    console.log(`A taxa de serviço da conta é: $${taxa.toFixed(2)} \n O valor total da conta com taxa é $${(valor+taxa).toFixed(2)}`)
    reader.close()
})