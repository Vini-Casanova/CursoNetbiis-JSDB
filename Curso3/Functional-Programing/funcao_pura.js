const calcularImc = (peso, altura) => { return peso / (altura* altura)};


let volume = 0;
const aumentarVolume = (incremento) => { 
    volume+= incremento 
    return volume 
};


console.log(calcularImc(90,1.8));


console.log(aumentarVolume(90));

