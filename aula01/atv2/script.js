function calcular() {
    const v1 = parseFloat(document.getElementById('num1').value);
    const v2 = parseFloat(document.getElementById('num2').value);
    const resDiv = document.getElementById('resultado');

    if (isNaN(v1) || isNaN(v2)) {
        resDiv.innerHTML = "<p style='color: red;'>Insira os números, mortal!</p>";
        return;
    }

    const soma = v1 + v2;
    const media = soma / 2;
    const produto = v1 * v2;
    const maior = Math.max(v1, v2);
    const menor = Math.min(v1, v2);

    resDiv.innerHTML = `
        <div class="line-res"><span class="label">SOMA:</span> ${soma}</div>
        <div class="line-res"><span class="label">MÉDIA:</span> ${media.toFixed(2)}</div>
        <div class="line-res"><span class="label">PRODUTO:</span> ${produto}</div>
        <div class="line-res"><span class="label">MAIOR:</span> ${maior}</div>
        <div class="line-res"><span class="label">MENOR:</span> ${menor}</div>
    `;
}