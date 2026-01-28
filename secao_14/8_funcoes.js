function soma(a,b){
    return a+b
}
console.log(soma(100,300))

/*
1) desligar a torneira;
2) pedir copo de água;
3) ir ao mercado comprar arroz;
*/

function desligarTorneira(){
    console.log("desligar torneira")
    function PedirCopoAgua(){
        console.log("pedir copo de água")
        function irAoMercadoComprarArroz(dinheiro){
            if(dinheiro > 10){
                console.log("comprado")
            }else{
                console.log('dinheiro insuficiente')
            }
        }   
        irAoMercadoComprarArroz(11)
    }
    PedirCopoAgua()
}
desligarTorneira()
