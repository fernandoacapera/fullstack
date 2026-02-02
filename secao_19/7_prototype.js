//Descendentes de Object
class Carro{
    constructor(){
        this.placa = "AMP-1230"
    }
}

class BMW extends Carro {
    constructor(){
        super()
        this.nome = "BMW 320i"
    }
}
const objBMW = new BMW()
console.log(objBMW)

//Prototype Chain - encadeamento de objetos

const veiculo = {
    motor: "50 cavalos"
}

const carro = {
    placa: "AMP-1230",
    __proto__: veiculo
}
const bmw = {
    nome: "BMW 320i",
    motor: "300 cavalos",
    __proto__: carro
}