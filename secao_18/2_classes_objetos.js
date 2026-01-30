//Notação Literal
/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res =  this.quartos - this.ocupados
        return "Disponivel: " + res
    }
}
*/

//Notação de construtor (objeto em branco)
/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
    let res = this.quartos - this.ocupados
    return "Disponível: " + res
}
*/

//Criando classes

class Hotel{
    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }
    
    verificarDisponibilidade(){
        let res = this.quartos - this.ocupados
        return "Disponivel: " + res
    }
}

const hotel = new Hotel()
hotel.quartos = 100
console.log(hotel.verificarDisponibilidade())