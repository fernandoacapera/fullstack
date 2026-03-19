let product = 'Microondas';
let price = 647.52;
export function display(product, price) {
    console.log({ product: product.toUpperCase() }, { price: price.toFixed(0) });
}
display(product, price);
