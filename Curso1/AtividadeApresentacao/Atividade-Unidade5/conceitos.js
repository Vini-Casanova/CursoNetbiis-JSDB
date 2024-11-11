const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question(" ", number => {
    let nota = parseInt(number)
    console.log(`A nota ${nota} é considerada: ${avaliarNota(nota)}`);
    reader.close()
})

function avaliarNota(nota) {
    if (nota >= 90 && nota <= 100) {
        return "Excelente";
    } else if (nota >= 70 && nota < 90) {
        return "Bom";
    } else if (nota >= 50 && nota < 70) {
        return "Regular";
    } else if (nota >= 0 && nota < 50) {
        return "Insuficiente";
    } else {
        return "Nota inválida";
    }
}
