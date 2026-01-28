function calcularMelhorPreco(){
          //validar campos
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if(precoAlcool != ""){
        if(precoGasolina != ""){

        let resultado = precoAlcool / precoGasolina
        if (resultado >= 0.7){
            //alert("É melhor usar gasolina")
            document.getElementById("resultado").innerHTML = 'É melhor usar gasolina'
        }else{
            //alert("É melhor usar alcool")
            document.getElementById("resultado").innerHTML = 'É melhor usar alcool '
        }

        }else{
        alert("preencha o preço da gasolina")
        }
    }else{
        alert("preencha o preço do alcool")
    }
}