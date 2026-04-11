const campoNome = document.getElementById('nome_jogador');
const campoPosicao = document.getElementById('posicao_jogador');
const botaoSalvar = document.getElementById('btn_salvar');
const containerLista = document.getElementById('grid-elenco');


function cadastrarEExibir() {
  
    const nome = campoNome.value.trim();
    const posicao = campoPosicao.value.trim();

   
    if (nome === "" || posicao === "") {
        alert("Ops! Preencha o nome e a posição do novo craque!");
        return;
    }

    const cardJogador = document.createElement('div');
    cardJogador.className = 'jogador-card'; 

    cardJogador.innerHTML = `
        <small>${posicao}</small>
        <h4>${nome}</h4>
    `;

   
    containerLista.appendChild(cardJogador);

  
    campoNome.value = "";
    campoPosicao.value = "";
    campoNome.focus();
}


botaoSalvar.addEventListener('click', cadastrarEExibir);

campoPosicao.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        cadastrarEExibir();
    }
});