/*
1. Manipulação de Arrays e Loops (Seções 17 e 21)
O Desafio: Crie uma lista de notas de alunos. Sua tarefa é criar uma função que:

Receba esse array de notas.

Use um método nativo (como filter) para remover as notas abaixo de 5.0.

Use um loop ou reduce para calcular a média apenas das notas restantes (as aprovadas).
Código base para começar: */
const notas = [7.5, 3.2, 9.0, 4.5, 6.0, 10.0, 2.5];

function calcularMediaAprovados(listaDeNotas) {
    let aprovados = listaDeNotas.filter((nota => nota >= 5))
    soma = aprovados.reduce((valorAnterior, valorAtual) => (valorAnterior + valorAtual), 0)
    total = soma / aprovados.length;
    return total
}

console.log(calcularMediaAprovados(notas)); 
// Esperado: Média das notas acima de 5