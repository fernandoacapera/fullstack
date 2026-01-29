/*
(condicao){
}

*/
let postagem = [
    "Hoje passeando pela av paulista",
    "Passeando em Campos do Jordão",
    "Hoje fiz um curso de criação de sites",
    "Na casa da mamãe, aproveitando o dia!"
]
const totalPostagens = postagem.length
let numero = 0
while(numero <=3){
    console.log(`Imagem ` + numero)
    console.log(postagem[numero])
    console.log("----")
    numero = numero + 1
}