var user = {
    nome : String,
    idade : Number,
    email: String,
    telefone: String
}

function setUserData(nome,idade,email,telefone){
    user.nome = nome
    user.idade = parseInt(idade)
    user.email = email
    user.telefone = telefone
}

function getUserData(){
    document.write(`Nome do usuário : ${user.nome} <br> Idade do usuário: ${user.idade} <br> Email do usuário: ${user.email} <br> Telefone de contato: ${user.telefone}`)
}

var nome = prompt("Digite seu nome: ")
var idade = prompt("Digite a data de nascimento: ")
var email = prompt("Digite seu email: ")
var telefone = prompt("Digite seu telefone: ")

setUserData(nome, idade, email, telefone)

getUserData()