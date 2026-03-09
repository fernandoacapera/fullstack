let product = 'Microondas'
let price = 647.52


export function display(product:String, price:Number){
    console.log({product: product.toUpperCase()},{price: price.toFixed(0)})
}

display(product, price)