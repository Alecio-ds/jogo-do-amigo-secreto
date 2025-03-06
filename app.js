let nomeParticipantes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    console.log(nome);
    
        if (nome == ""){
            alert("Por favor, insira um nome.");
        return;

        }
    
        if(nomeParticipantes.includes(nome)){
            alert("Este nome já foi adicionado!");
            return;

        }

        nomeParticipantes.push(nome);
        console.log(nomeParticipantes);
        atualizarLista();
        input.value = "";
             
}

function atualizarLista(){
    let listaParticipantes = document.getElementById("listaAmigos");
    listaParticipantes.innerHTML = "";

    nomeParticipantes.forEach(function(nome) {
        let nomeNaTela = document.createElement("li");
        nomeNaTela.textContent = nome;
        listaParticipantes.appendChild(nomeNaTela);
    });

}

function sortearAmigo(){
    if (nomeParticipantes.length <= 1){
        alert ("Insira no mínimo 2 nomes para que o sorteio funcione!");
        return;
    }
    let indiceSorteio = Math.floor(Math.random() * nomeParticipantes.length);
    let sorteado = nomeParticipantes [indiceSorteio];
    document.getElementById("listaAmigos").innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =  `Amigo Secreto: ${sorteado}`;

}
