let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificar() {
    let palpite = document.getElementById("importNumero").value;
    let mensagem = document.getElementById("mensagem");


if (palpite == numeroSecreto) {
    mensagem.innerText = "Parabéns! Você acertou o número secreto!";
} else if (palpite < numeroSecreto) {
    mensagem.innerText = "tente um número maior!";
} else {
    mensagem.innerText = "tente um número menor!";
}

}