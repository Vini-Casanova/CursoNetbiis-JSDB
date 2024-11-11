function calcularHorasTrabalhadas(timeInicio, timeFim) {
    const diferenca = timeFim - timeInicio;
    const horasEmMS = 1000 * 60 * 60;
    const horas = diferenca / horasEmMS;
    const restante = diferenca % horasEmMS;
    const minutos = restante / (1000 * 60);
    return `${horas.toFixed(0)} horas e ${minutos.toFixed(0)} minutos`;
}

const fim = new Date();
const inicio = new Date();
inicio.setHours(8, 0, 0);

const horasTrabalhadas = calcularHorasTrabalhadas(inicio.getTime(), fim.getTime());
console.log(horasTrabalhadas);
