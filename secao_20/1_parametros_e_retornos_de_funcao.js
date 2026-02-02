//Parâmetros padrão
/*
function somar(num1, num2){
    // verificar se é nulo, se for nulo ele retorna 0, se não ele retorna o valor
    num1 = isNaN(num1) ? 0 : num1
    num2 = isNaN(num2) ? 0 : num2
    return num1 + num2



}
console.log(somar(2))
//NaN -> Not a Number (Não é um numero)

*/

// Parâmetros e retornos opcionais
function calcularSalario(salario=0, desconto){
    desconto = isNaN(desconto) ? 0 : desconto
    if (salario == 0){
        console.log("Salário não informado")
    }
    else{

        console.log(salario - desconto) 
    }

}

calcularSalario(0,20)