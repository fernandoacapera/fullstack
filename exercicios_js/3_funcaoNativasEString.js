/*
O Desafio: Crie uma função chamada limparCPF que recebe um CPF sujo (com pontos e traços) e retorna apenas os números.

Use métodos de string como .replace() ou .split() e .join().

Garanta que o resultado seja uma string contendo apenas dígitos.
*/
const cpfSujo = "123.456.789-00";
// Resultado esperado: "12345678900"

function limparCPF(CPFSujo){
    let cpf_limpo = CPFSujo.split('.').join('').split('-')
    return cpf_limpo
}

console.log(limparCPF(cpfSujo))