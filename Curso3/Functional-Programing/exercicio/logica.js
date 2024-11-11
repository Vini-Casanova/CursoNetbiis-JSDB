const users = [
    {
        name: 'Diniz',
        idade: 18,
        phone: '13131313131313',
        email:'diniz@htomail.com'
    },
    {
        name: 'Maria',
        idade: 10,
        phone: '1212121212',
        email:'maria@gmail.com'
    },
    {
        name: 'Rafael',
        idade: 21,
        phone: '8181818181',
        email:'rafael@yahoo.com'
    },
    {
        name: 'Natan',
        idade: 17,
        phone: '9191919191',
        email:'natan@outlook.com'
    },

];
const filterUsers = (users) =>{
    console.log('\nUsuarios filtrados:');
    return users.filter(users => users.idade >= 18)
}

const transformList = (users) => {
    console.log('\nLista transformada:');
    return users.map(usuario => {
        return {
            name: usuario.name,
            idade: usuario.idade
        };
    });
}

const sortListr = (users) => {
    console.log('\nOrdenando lista:');
    return users.sort((a, b) => a.idade - b.idade);
}

const meanIdade = (users) => {
    console.log('\nCalculando a média da idade:');
    return users.reduce((total, user) => total + user.idade, 0) / users.length;
}


const processarLista = (funcao,users) => {
    console.log(funcao(users));
}

processarLista(filterUsers, users);

processarLista(transformList, users);

processarLista(sortListr, users);

processarLista(meanIdade, users);