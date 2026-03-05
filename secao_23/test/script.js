
const form = document.getElementById("formulario")
const botao = form.botao
function printNameAndPassword(){
  const nome = document.getElementById('nome')
  const senha = document.getElementById('senha')

  console.log(nome.value, senha.value)
}
botao.addEventListener('click', printNameAndPassword)