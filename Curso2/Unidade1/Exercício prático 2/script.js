const candidatos = [
    { nome: 'João', numero: "123" ,votos: 5 ,corPartido:"red"},
    { nome: 'Maria',numero: "456" ,votos: 5 ,corPartido:"green"},
    { nome: 'Pedro',numero: "789" ,votos: 5 ,corPartido:"yellow"},
]

const votosNulosVotosBrancos = [
    { nome: "Votos em brancos", numero: "0", votos:0},
    { nome: "Votos nulos", numero: "" ,votos:0},

]

const ulCandidos = document.getElementById('candidatos');
const  footer = document.getElementById('footer');

function renderCandidatos(params) {
    ulCandidos.innerHTML = '';
    candidatos.sort((x,y) =>y.votos - x.votos);
    candidatos.map(candidato => {
        ulCandidos.innerHTML += `
            <li>
                <span class="numero-candidato" style="color:${candidato.corPartido}">${candidato.numero}</span>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos}</span>
            </li>
        `;
    })
}

function renderVotosNullOrBlank(params) {
    votosNulosVotosBrancos.map(votos => {
        footer.innerHTML += 
            `<p>${votos.nome}: <span id="votos-brancos">${votos.votos}</span></p>`
        ;
    })
}

function votaCandidato() {
    const numeroCandidato = document.getElementById('numero-candidato');
    try {
        candidatos.find(candidato => candidato.numero === numeroCandidato.value).votos++;
    } catch (error) {
        //console.log(numeroCandidato.value)
        //votoNuloBraco()
    }
    //console.log( typeof numeroCandidato.value);
    //numeroCandidato.value? candidatos.find(candidato => candidato.numero === numeroCandidato.value).votos++: votoNuloBraco(numeroCandidato.value); 
    renderCandidatos();
    
}

function votoNuloBraco(value){
    votosNulosVotosBrancos.find(tipoVoto => tipoVoto.numero === value).votos++;
    renderVotosNullOrBlank();

}

renderCandidatos();