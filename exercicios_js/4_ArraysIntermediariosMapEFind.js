/*
O Desafio: Você tem uma lista de produtos, onde cada produto é um objeto com id, nome e preco.

Use o método .find() para encontrar o produto com ID igual a 3.

Use o método .map() para criar uma nova lista contendo apenas os preços dos produtos.
*/
const produtos = [
    { id: 1, nome: 'Teclado', preco: 150 },
    { id: 2, nome: 'Mouse', preco: 50 },
    { id: 3, nome: 'Monitor', preco: 900 }
];
// 1. Encontre o Monitor
console.log(produtos.find(item => item.id == 3))
// 2. Crie um array [150, 50, 900]
let precosProdutos = produtos.map(item => item.preco)

console.log(precosProdutos)


