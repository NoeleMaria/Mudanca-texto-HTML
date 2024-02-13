function modificarConteudo() {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.textContent = "Mudança de texto realizada";
}

function modificarTextInserido() {
    let texto = document.getElementById('texto');
    texto.textContent = document.getElementById('textoInserido').value;
}