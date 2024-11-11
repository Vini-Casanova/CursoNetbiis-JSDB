function substituirPalavra(frase, palavra, novaPalavra) {
    return frase.replace(palavra, novaPalavra);
}

const frase = "Eu gosto de JavaScript";
const palavra = "JavaScript";
const novaPalavra = "Python";
const resultado = substituirPalavra(frase, palavra, novaPalavra);
console.log(resultado);