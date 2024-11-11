import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World GET!');
});

app.get('/alunos', (req, res) => {
    res.send('Hello, World GET ALUNOS!');
});

app.get('/alunos/:id', (req, res) => {
    const id = req.params.id;
    const query = req.query;
    console.log(query);

    res.send(`Hello, World GET ALUNOS ${id}!`);
});

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(200).send("Aluno criado!")
});

app.put('/aluno/:id', (req, res) => {
    console.log(req.headers);
    res.header('Content-Type', 'application/json');
    res.send({message: 'Aluno'+ req.params.id + ' atualizado!'});
});

app.delete('/alunos', (req, res) => {
    res.send('Aluno Deletado!');
});

app.use('/static',express.static('assets'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});