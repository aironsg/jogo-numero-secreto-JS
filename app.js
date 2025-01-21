chutes = 1;


function exibitTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


exibitTexto('h1', 'Jogo do número secreto');
exibitTexto('p', 'Escolha um número entre 1 a 100');



numeroAleatorio = gerarNumeroAleatorio();
function verificarChute() {
    chute = document.querySelector('input').value;

    textoTentativas = chutes == 1 ? 'tentativa' : 'tentativas';
    if (numeroAleatorio == chute) {
        exibitTexto('h1', 'Você acertou');
        exibitTexto('p', `Parabens, Você precisou de ${chutes} ${textoTentativas}`);
        finalizarJogo();
    } else {
        chutes++
        if (numeroAleatorio > chute) {
            exibitTexto('p', 'O Número secreto é maior');
        } else {
            exibitTexto('p', 'O Número secreto é menor');

        }
        limparTela();
    }


}

function limparTela() {
    document.querySelector('input').value = '';
}

function finalizarJogo() {
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('chutar').disabled = true;

}
function reiniciarJogo() {
    document.getElementById('reiniciar').addEventListener('click', function () {
        location.reload();
    });
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);

}





