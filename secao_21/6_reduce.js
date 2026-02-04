//reduzir um array até ficar um valor

const foguetes = [
    {pais: "Russia", lancamentos: 32},    
    {pais: "US", lancamentos: 23},
    {pais: "China", lancamentos: 16},
    {pais: "Europa", lancamentos: 7},
    {pais: "India", lancamentos: 4},
    {pais: "Japão", lancamentos: 3},
]
const totalLancamentos = foguetes.reduce((valor_anterior,valor_atual) => valor_anterior + valor_atual.lancamentos, 0) //possivel deixar um valor anterior como padrão, vou colocar 0

//ele pega esse 0 que definimos como primeiro valor e pega o valor atual 0 + 32
//depois pega o valor anterior + valor atual 32 + 23
// e por ai vai até ficar 1 unico valor, que no caso a somatoria que definimos. retornando 85

console.log(totalLancamentos)