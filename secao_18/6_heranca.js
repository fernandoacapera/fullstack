//Herança - Reutilização e manutenção
//Classe: Cão passaro
class Animal { //superclasse (classe principal)
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    correr(){
        console.log("correr")
        console.log("como")
        console.log("um")
    }
    dormir(){
        console.log("dormir")
    }

}

class Cao extends Animal{//subclasse
    constructor(cor, tamanho, peso,tamanhoOrelha){
        super(cor, tamanho, peso)
        this.tamanhoOrelha = tamanhoOrelha
    }
    correr(){
        super.correr()
        console.log("cao")
    }
    latir(){
        console.log("latir")
    }
}

class Passaro extends Animal{//subclasse
    constructor(cor, tamanho, peso){
    super(cor, tamanho, peso)
    }
    voar(){
        console.log("voar")
    }
}
class Papagaio extends Passaro{
    constructor(cor, tamanho, peso, falar){
        super(cor, tamanho, peso)
        this.sabeFalar = true
    }
    falar(){
        console.log("falar")
    }
}

//Instancia
/*
const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio()

cao.correr()

const animal =  new Animal("Amarelo", 60, 3)
console.log(animal)
const cao = new Cao("Amarelo", 60, 3, 5)
console.log(cao) 
*/
const papagaio = new Papagaio("Vermelho", 20,1,true)
console.log(papagaio)