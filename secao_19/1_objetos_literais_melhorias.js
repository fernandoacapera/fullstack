//Objetos literais - melhorias
/*
let nome = "Notebook"
let preco = 1200

const produto = {
    nome,
    preco,
    exibirProduto(){
        console.log(`${this.nome}, ${this.preco}, ${this.categoria}`)
    }
}

produto.categoria = "Eletrônicos"
produto.exibirPreco = function(){
    console.log(`Preço: ${this.preco}`)
}
produto.exibirProduto()
*/

class Produto{
    constructor(){
        this.nome = ""
        this.preco = 0
    }
}
const produto = new Produto()
const pro = produto
pro.preco 