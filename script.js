const botao = document.getElementById("contato");
let temporizador  
botao.addEventListener("click", function() {
    botao.textContent = "Mensagem enviada!";

    clearTimeout(temporizador);
    
    temporizador = setTimeout(function(){
        botao.textContent = "Entrar em contato";
    },2000);
});
