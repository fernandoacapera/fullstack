
function gerarFraseMotivacional(){

    const frases = [
        "Os problemas são oportunidades para se mostrar o que sabe.",
        "Nossos fracassos, as vezes, sao mais frutiferos do que os exitos",
        "Tente de novo. Fracasse de novo. Mas fracasse melhor",
        "Experiencia é o nome que cada um dá a seus erros",
        "Um objetivo nada mais é do que um sonho com limite de tempo",
        "Sorte é o que acontece quando a preparação encontra a oportunidade",
        "O unico lugar que o sucesso vem antes do trabalho é no dicionário",
        "É tentando o impossivel que se chega à realização do possivel.",
        "Muda tuas ideias e mudarás teu mundo",
        "Em busca do ótimo não se faz o bom."
    ]
    
    //gera numeros aleatorios (math.floor arredonda numero inteiro para baixo)
    const numeroAleatorio = Math.floor(Math.random() * 7)
    const frase = frases[numeroAleatorio]

    document.getElementById("frase").innerHTML = frase
}

