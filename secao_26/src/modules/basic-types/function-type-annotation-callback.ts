// TODO CartItem
type CartItem = {
    id: number,
    price: number
}

type Address = {
    cep: string,
    default: boolean
}
//TODO ShoppingCart
type ShoppingCart = {
    cartItems: CartItem[]
}

type Customer = {
    addresses: Address[]
}
const addresses: Address[] = [
    {cep: '0000-000', default: false},
    {cep: '0000-001', default: true},
    {cep: '0000-002', default: false},
]
const customer: Customer = {
    addresses: addresses
}

//console.log("Detalhes do customer", customer)
//TODO criar variavel do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
    cartItems: [
        {id: 1000, price: 200},
        {id: 1070, price: 300},
        {id: 3000, price: 500}
    ]
}

type ApplyDiscountFn = (total: number, discount: number) => number

const applyDiscount: ApplyDiscountFn = (
    total: number, 
    discount: number
): number =>{
    return total - total * discount
}
type CalculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscountFn) => number;
//let calculateTotal: (sC: ShoppingCart) => number

let calculateTotal: CalculateTotalFn = function(
    shoppingCart: ShoppingCart,
    ApplyDiscount: ApplyDiscountFn
): number{
    const total = shoppingCart.cartItems.reduce(
        (acc,item)=> acc+item.price,0
    )
    return ApplyDiscount(total, 0.10)
}

const total = calculateTotal(shoppingCart, applyDiscount)

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`)

type AddressOrUndefined = (c: Customer) => Address | undefined

const getPrincipalAddress:AddressOrUndefined = (customer: Customer): Address | undefined => {
    return customer.addresses.find(addresses => addresses.default)
}

const principalAddress = getPrincipalAddress(customer)

if (principalAddress !== undefined){
    console.log(principalAddress)
}

export { getPrincipalAddress, calculateTotal}