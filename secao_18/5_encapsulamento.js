//Pilar
/*
class Carro{
  constructor(){
    this.modelo = "Gol"
    this.cor = "Vermelho"
  }
  frear(){
    //freio com tecnologia a tambor

    
    console.log("parar o carro")
  }
}

const carro = new Carro()
carro.frear()

const filtro = new Filtro()

filtro.pretoEBranco(imagem)
*/

//Encapsulamento, controle de acesso, getters e setter
class ContaBancaria{
  constructor(){
    this._numeroConta = 0
    this._saldo = 0
  }

  sacar(valorSaque){
    this._saldo = this._saldo - valorSaque
  }

  depositar(valorDeposito){
    this._saldo = this._saldo + valorDeposito
  }


  get saldo(){
    return this._saldo
  }
  get numeroConta(){
    // Verificar se o usuario está logado
    return " Numero: " + this._numeroConta
  }

  set saldo(novoSaldo){
    if (novoSaldo > 0){
      this._saldo = novoSaldo
    }}
  set numeroConta(numero){
    if(numero > 0){
      this._numeroConta = numero
    }

  }


}

const conta = new ContaBancaria()
conta.numeroConta = 50