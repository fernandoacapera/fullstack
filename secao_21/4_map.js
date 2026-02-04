const pessoas = ["Fernando", "Bia", "Ana","Marcela", "Pedro"]

let funcao = function(item,i, arr){
    return {item}
}

const novoArray = pessoas.map(funcao)
//console.log(novoArray)

const produtosDolar = [
    {produto: "Notebook", preco: 1200, moeda: "$"},
    {produto: "Celular", preco: 800, moeda: "$"}
]

const conversao = function(item){
    item.moeda = "R$"
    item.preco *= 3
    return item
}

const moedaConvertida = produtosDolar.map(conversao)
console.log(moedaConvertida)