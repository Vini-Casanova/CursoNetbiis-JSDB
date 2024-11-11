function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("Hello World"));
console.log(contarVogais("JavaScript"));
console.log(contarVogais("Contar Vogais"));
console.log(contarVogais("Curso Netbiis"));
console.log(contarVogais("AEIOU aeiou"));