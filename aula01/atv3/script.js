function starGame() {
    
    var idadeInput = document.getElementById("idade").value;
    var idade = parseInt(idadeInput);
    var display = document.getElementById("game-container");

    
    if (idadeInput === "") {
        display.textContent = " Por favor, informe sua idade!";
        display.style.color = "#ffffff";
        return;
    }

   
    if (idade < 16) {
       
        display.textContent = " Você é muito jovem! Não pode votar.";
        display.style.color = "#ff4444";
    } 
    else if (idade >= 16 && idade <= 17) {
       
        display.textContent = " Um jovem aprendiz! Seu voto é opcional.";
        display.style.color = "#44ccff";
    } 
    else if (idade >= 18 && idade <= 65) {
        
        display.textContent = " Guerreiro em atividade! Voto OBRIGATÓRIO.";
        display.style.color = "#ffcc00";
    } 
    else {
        
        display.textContent = " Veterano lendário! Voto opcional.";
        display.style.color = "#99ff99";
    }
}