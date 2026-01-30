//Paradigma - exemplo do padrão a ser seguindo, não se trata de uma linguagem, mas a forma como você soluciona problemas usando uma linguagem de programação

//Javascript é multi apradigma

//Procedural
/*function verificarDisponibilidade(quarto,ocupado){
    let res = quarto - ocupado
    console.log("Disponiveis: " + res)
}

verificarDisponibilidade(20,10)
*/
//Orientado a objetos
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res =  this.quartos - this.ocupados
        console.log("Disponiveis: " + res)
    }
}


hotel.ocupados = 21
hotel.verificarDisponibilidade()