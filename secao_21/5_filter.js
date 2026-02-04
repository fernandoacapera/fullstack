/*
const usuarios = [
    {nome: "Fernando", idade: 22},
    {nome: "Bibi", idade: 22},
    {nome: "João", idade: 34},
    {nome: "Ana", idade: 17}
]

const funcao = function(item, indice, array){
    return item.idade >= this.filtro
    //return retorna apenas true ou false
}
const filtro = {
    filtro: 18
}
const usuariosMaiorIdade = usuarios.filter(funcao, filtro)

console.log(usuariosMaiorIdade)
*/

//Desafio rapido

const carros = [
    {nome: "Gol", marca: "Volkswagem"}, 
    {nome: "iX35", marca: "Hyundai"},
    {nome: "Santa Fé", marca: "Hyundai"},
    {nome: "Polo", marca: "Volkswagem"} 
]

const filtro = {
    filtro: "Hyundai"
}

const onlyHyundai = carros.filter(function(item){
    return item.marca == this.filtro
}, filtro)

console.log(onlyHyundai)