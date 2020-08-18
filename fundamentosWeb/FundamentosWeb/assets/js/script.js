/*  Case sensitive = reconhece letras maiusculas e minusculas

Por tags: getElementByTagName()
Por ID: getElementById()
Por nome: getElementByName()
Por classe: getElementByClassName()
por seletor: queryselector()
*/

let nome  = window.document.getElementById("nome")
let emaii = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
emaii.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML= 'Nome invalido'
        txtNome.style.color = 'red'   
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }

}

function validaEmail() {
    let txtEmail = document.querySelector ('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }  else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }

}