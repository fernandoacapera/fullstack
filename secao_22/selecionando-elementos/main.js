//const obj = document.getElementById('destaque')

/* Minha tentativa:
const obj = document.querySelector('button')

if (obj.click()){
    const primeiro = document.querySelector('primeiro')
    primeiro.textContent = "Teste"
}
*/

//resposta:

function executar(){
    const obj = document.querySelector('li.primeiro')
    obj.innerHTML = "teste"
    obj.classList.add("destaque")

}
const colecao = document.getElementsByTagName('div')
//console.log(objt)
/*
for(let i=0; i< colecao.length ; i++){
    console.log(colecao[i].textContent)
}

const lista = Array.from(colecao)
const funcao = function(item, i){
    console.log(item.textContent)
}
lista.forEach(funcao)
*/
//console.log(lista.reduce)
/*
const colecao2 = document.getElementsByClassName('vermelho')

const colecao3 = document.getElementsByName('nome')
console.log(colecao3[1])
*/
const obj = document.quer