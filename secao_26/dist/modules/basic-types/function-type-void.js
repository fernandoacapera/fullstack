//TODO criar variavel do tipo ShoppingCart contendo CartItem
const shoppingCart = {
    cartItems: [
        { id: 1000, price: 200 },
        { id: 1070, price: 300 },
        { id: 3000, price: 500 }
    ]
};
//TODO funcao do tipo void para somar os valores do item
export function calculateTotal(shoppingCart) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}
calculateTotal(shoppingCart);
