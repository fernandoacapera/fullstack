        //alert('Olá Mundo!');
var hora = new Date().getHours()
var saudacao

hora = 19

if(hora < 12){
    saudacao = "Bom dia"
}else if(hora < 18){
    saudacao = "Boa tarde"
}
else{
    saudacao = "Boa noite"
}

document.getElementById("mensagem").innerHTML = saudacao