//Tratamentos de erros com Try Catch

function contarQuantidadeLetras(produto){
    try{
        console.log(produto.nome.length)

    }
    catch(erro){
        tratarErro(erro)
    }
}

function tratarErro(erro){
    throw new Error("teste")
}
const produto = {
    nome: "Notebook",
    preco: 1200
}

contarQuantidadeLetras(produto)