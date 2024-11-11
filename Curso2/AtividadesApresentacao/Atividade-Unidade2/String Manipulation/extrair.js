function extrairIniciais(nome) {
    return nome.split(' ').map(parte => parte.charAt(0).toUpperCase()).join('.') + '.';
}

console.log(extrairIniciais("John Doe"));
console.log(extrairIniciais("Jane Mary Doe"));