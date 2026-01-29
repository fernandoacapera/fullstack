let nomes = [
    "Fernando",
    "Maria",
    "João",
    "Ana",
    "Carlos",
    "Beatriz",
    "Pedro",
    "Juliana",
    "Lucas",
    "Isabela",
    "Rafael",
    "Camila",
    "Carlos"
]

function carregarNomes(){
    let itensLista = ''
    for(indice in nomes){
        
        let nome = nomes[indice]
        itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`
        
    }
    document.getElementById('lista').innerHTML = itensLista

}

function FiltrarNomes(){
    let itensLista = ''
    let nome_filtrado = document.getElementById('campo-pesquisa').value
    for(indice in nomes){
        let nome = nomes[indice]
        if (nome == nome_filtrado){
            itensLista += `
            <li class="list-group-item">
                ${nome}
            </li>`
        }
    }   
    document.getElementById('lista').innerHTML = itensLista
}


