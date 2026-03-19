const addresses = [
    { cep: '0000-000', default: false },
    { cep: '0000-001', default: true },
    { cep: '0000-002', default: false },
];
const customer = {
    addresses: addresses
};
//console.log("Detalhes do customer", customer)
//TODO criar variavel do tipo ShoppingCart contendo CartItem
const shoppingCart = {
    cartItems: [
        { id: 1000, price: 200 },
        { id: 1070, price: 300 },
        { id: 3000, price: 500 }
    ]
};
let calculateTotal;
calculateTotal = function (shoppingCart) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    return total;
};
const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
const getPrincipalAddress = (customer) => {
    return customer.addresses.find(addresses => addresses.default);
};
const principalAddress = getPrincipalAddress(customer);
if (principalAddress !== undefined) {
    console.log(principalAddress);
}
export { getPrincipalAddress, calculateTotal };
