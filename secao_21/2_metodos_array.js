const estados = [
    "São Paulo",
    "Ceará",
    "Rio de Janeiro",
    "Bahia",
    "Minas Gerais"
]

/*** Remove elementos do array */

//estados.pop() //remove o ultimo elemento
//estados.shift() //remove o primeiro elemento


/*** Adiciona novo elemento no array */

//estados.push('fernando') //adicionar um novo item no final do array
//estados.unshift('fernando') //adiciona no inicio


/*** Retorna novo array */

//const novo = estados.splice(0,3, "teste1", "teste2") //emendar. primeiro é onde começo e depois da virgula é a quantidade de itens que vai remover. no caso do indice 0 ao indice 3 ele ira tirar os itens dentro do array. é possivel adicionar itens no lugar do que você removeu adicionando mais virgulas e colocando uma string

//const novo = estados.slice(0,2) //cortar


/*** Converte Array / String */
const usuarios = ["Fernando", "Arnold", "Capera"]
let texto = usuarios.join() //converte o array em texto
let arrayTexto = texto.split(",")