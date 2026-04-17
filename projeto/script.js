document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-jogador');
    const gridElenco = document.getElementById('grid-elenco');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

       
        const nome = document.getElementById('NOME').value;
        const origem = document.getElementById('ORIGEM').value;
        const atributo = document.getElementById('ATRIBUTO').value;
        const minibio = document.getElementById('BIO').value;

        
        const card = document.createElement('div');
        card.className = 'vitoria-card';
        
        card.innerHTML = `
            <div class="card-header">
                <h3>${nome}</h3>
            </div>
            <div class="card-body">
                <p><strong>ORIGEM:</strong> ${origem}</p>
                <p><strong>HABILIDADE:</strong> ${atributo}</p>
                <div class="bio-box">${BIO}</div>
            </div>
            <button class="btn-delete">DISPENSAR</button>
        `;

       
        card.querySelector('.btn-delete').addEventListener('click', () => {
            card.style.opacity = '0';
            setTimeout(() => card.remove(), 300);
        });

        
        gridElenco.appendChild(card);

        
        form.reset();
        document.getElementById('nome').focus();
    });
});