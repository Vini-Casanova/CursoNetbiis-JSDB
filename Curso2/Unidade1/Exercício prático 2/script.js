const candidatos = [
    { nome: 'João', numero: "123" ,votos: 5 },
    { nome: 'Maria',numero: "456" ,votos: 5 },
    { nome: 'Pedro',numero: "789" ,votos: 5 }
]

const ulCandidos = document.getElementById('candidatos');

function renderCandidatos(params) {
    ulCandidos.innerHTML = '';
    candidatos.sort((x,y) =>y.votos - x.votos);
    candidatos.map(candidato => {
        ulCandidos.innerHTML += `
            <li>
                <span class="votos-candidato">${candidato.numero}</span>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos}</span>
            </li>
        `;
    })
}

function votaCandidato() {
    const numeroCandidato = document.getElementById('numero-candidato');
    candidatos.find(candidato => candidato.numero === numeroCandidato.value).votos++;
    renderCandidatos();
    
}

renderCandidatos();