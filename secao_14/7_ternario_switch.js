/*
let idade = 18
if (idade > 18){
    console.log("Maior de idade")
} else if(idade == 18){
    console.log("ta na idade safado")
}else{
    console.log("Menor de idade")
}

let opcao = 1

if (opcao == 1){
    console.log("Saldo da conta")
}else if (opcao == 2){
    console.log("Cartão de crédito")
}else if (opcao == 3){
    console.log("Descontos indevidos")
}else{
    console.log("Falar com atendente")
}
*/

let opcao = 23

switch(opcao){
    case 1:
        console.log("saldo conta")
        break
    case 2:
        console.log("sei la")
        break
    default:
        console.log("nenhuma das opcoes")
        break
}

/* ternario */
let idade=20

/* tem que ter o ? sempre. depois do ? é o que vai retornar se for verdade e depois do : é o que vai retornar se for falso */
idade>=18? "Maior de idade": "Menor de idade"