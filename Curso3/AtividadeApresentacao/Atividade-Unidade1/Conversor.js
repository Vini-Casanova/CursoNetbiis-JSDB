class Conversor {
    static metrosParaQuilometros(metros) {
        return metros / 1000;
    }

    static quilometrosParaMetros(quilometros) {
        return quilometros * 1000;
    }
}

console.log(Conversor.metrosParaQuilometros(1500));
console.log(Conversor.quilometrosParaMetros(1.5)); 