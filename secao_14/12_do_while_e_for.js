//while
let numero = 1
while (numero <= 5){
    //console.log("Executou " + numero)
    numero++ //mesma coisa que numero = numero + 1
}

//do...while
let numero2 = 0
do{
    //console.log("Executou " + numero2)
    numero2--
}while ( numero2 >=1)

// for

let postagem = [
    "Hoje passeando pela av paulista",
    "Passeando em Campos do Jordão",
    "Hoje fiz um curso de criação de sites",
    "Na casa da mamãe, aproveitando o dia!",
    'postagem 5'
]
for (indice in postagem){
    console.log(postagem[indice])
}
/*
const total = postagem.length
for (let numero3 = 0; numero3 < total; numero3 ++){
    console.log(postagem[numero3])
}

*/
