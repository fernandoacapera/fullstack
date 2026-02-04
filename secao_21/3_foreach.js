const lista = ["Fernando", "Bia", "Ana","Marcela", "Pedro"]
/*
for (indice in lista){
    console.log(lista[indice])
}
*/

/*
lista.forEach(function(item){
    console.log(item)
})
*/
/*
lista.forEach(item => console.log(item))
*/

Array.prototype.percorrer = function(){ 
    for(let i=0; i < this.length ; i++){
        //this.length ta pegando o tamanho do meu array
        console.log("teste") 
    }
}

lista.percorrer()