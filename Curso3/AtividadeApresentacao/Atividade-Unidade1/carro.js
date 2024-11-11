class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.#alterarVelocidade(10);
    }

    frear() {
        this.#alterarVelocidade(-10);
    }

    #alterarVelocidade(delta) {
        this.velocidade += delta;
        if (this.velocidade < 0) {
            this.velocidade = 0;
        }
    }
}

const meuCarro = new Carro('Toyota', 'Corolla');
meuCarro.acelerar();
console.log(meuCarro.velocidade);
meuCarro.frear();
console.log(meuCarro.velocidade);
meuCarro.alterarVelocidade(20);