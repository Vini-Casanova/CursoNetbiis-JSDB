function calcularTempoPassado(time) {
    const agora = new Date();
    const diferenca = agora.getTime() - time;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    return `${dias} dias, ${horas} horas e ${minutos} minutos`;
}


const tempoPassado = calcularTempoPassado(0);
console.log(tempoPassado);