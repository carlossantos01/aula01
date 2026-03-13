function calcularMedia() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    const resDiv = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Piloto! Preencha as três notas para completar a corrida!");
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    resDiv.style.display = "block";
    
    // Regra: Média menor que 7 = Reprovado
    if (media >= 7) {
        resDiv.className = "aprovado";
        resDiv.innerHTML = `MÉDIA: ${media.toFixed(1)} <br> 🏁 1ST PLACE! (APROVADO)`;
    } else {
        resDiv.className = "reprovado";
        resDiv.innerHTML = `MÉDIA: ${media.toFixed(1)} <br> 🍌 ESCORREGOU! (REPROVADO)`;
    }
}