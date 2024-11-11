import express from 'express';

const candidatos = {
    candidatos : [
        {
            id: 1, 
            nome: 'Candidato A', 
            numero: "00",
            partido: 'ABC',
            foto: 'fulano,jpg',
            votos: 100
        },
        {
            id: 2, 
            nome: 'Candidato B', 
            numero: "01",
            partido: 'ABD',
            foto: 'fulano2,jpg',
            votos: 100
        }
    ]
}

const app = express();

app.use(express.json());

app.get('/candidatos', (req, res) => {
    res.send(candidatos);
})

app.get('/candidato/:id', (req, res) => {
    const id = req.params.id;
    const candidato = candidatos.candidatos.find(c => c.id === parseInt(id));
    if(!candidato) {
        res.status(404).send('Candidato não encontrado!');
        return;
    }
    res.json(candidato);
})

app.get('/candidatos', (req, res) => {
    const nome = req.query.nome;
    const candidato = candidatos.candidatos.find(c => c.nome === nome);
    
    if(!candidato) {
        res.status(404).send('Candidato não encontrado!');
        return;
    }
    
    res.json(candidato);
})

app.post('/candidatos', (req, res) => {
    const body = req.body;
    console.log(body);
    candidatos.candidatos.push(body);
    res.status(201).send('Candidato criado!');
})

app.put('/candidato/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const candidato = candidatos.candidatos.find(c => c.id === parseInt(id));
    if(!candidato) {
        res.status(404).send('Candidato não encontrado!');
        return;
    }
    candidato.nome = body.nome;
    candidato.numero = body.numero;
    candidato.partido = body.partido;
    candidato.foto = body.foto;
    candidato.votos = body.votos;

    res.status(200).send('Candidato atualizado!');
})

app.delete('/candidato/:id', (req, res) => {
    const id = req.params.id;
    const candidato = candidatos.candidatos.find(c => c.id === parseInt(id));

    if(!candidato) {
        res.status(404).send('Candidato não encontrado!');
        return;
    }

    const index = candidatos.candidatos.indexOf(candidato);
    candidatos.candidatos.splice(index, 1);

    res.status(200).send('Candidato deletado!');
})

app.post('/votar', (req, res) => {
    const id = req.body.id;
    const candidato = candidatos.candidatos.find(c => c.id === parseInt(id));
    
    if(!candidato) {
        res.status(404).send('Candidato não encontrado!');
        return;
    }
    
    candidato.votos++;
    res.status(200).send('Voto computado!');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});