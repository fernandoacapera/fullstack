"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.display = display;
let product = 'Microondas';
let price = 647.52;
function display(product, price) {
    console.log({ product: product.toUpperCase() }, { price: price.toFixed(0) });
}
display(product, price);
