function contarPalavras(frase) {
    if (typeof frase !== 'string') {
        return 0;
    }
    const palavras = frase.trim().split(/\s+/);
    return palavras.length;
}

console.log(contarPalavras("Olá, tudo bem?"));