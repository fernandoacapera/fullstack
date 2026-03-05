/*
O Desafio: Crie um objeto chamado carro. Esse objeto deve ter propriedades para marca, modelo, velocidadeAtual (inicialmente 0) e um método chamado acelerar.

O método acelerar deve receber um número (km/h) e somar à velocidadeAtual.

O método deve exibir no console: "O [Marca] [Modelo] está a [X] km/h".

Dica: Lembre-se de usar a palavra-chave this para acessar as propriedades de dentro do objeto.
*/
class Carro{
  constructor(marca, modelo){
    this.marca = ""
    this.modelo = ""
    this.velocidadeAtual = 0
    this.km = 0
  }
  acelerar(km){
    const acelerar =  km + this.velocidadeAtual
    return `O ${this.marca} ${this.modelo} está a ${acelerar} km/h`
  }

}
const carro = new Carro('VW', 'POLO')
carro.velocidadeAtual = 100
console.log(carro.acelerar(150))
