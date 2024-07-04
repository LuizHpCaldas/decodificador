// scripts.js

function criptografar() {
    let texto = document.getElementById('input-text').value;
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('input-text').value = ''; // Limpa o campo de entrada
    mostrarResultado(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById('input-text').value;
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('input-text').value = ''; // Limpa o campo de entrada
    mostrarResultado(textoDescriptografado);
}

function mostrarResultado(texto) {
    let outputText = document.getElementById('output-text');
    let outputContainer = document.getElementById('output-container');
    let copyButton = document.getElementById('copy-button');

    outputText.value = texto;

    if (texto) {
        outputContainer.classList.add('show-output');
        copyButton.classList.add('show-copy');
    } else {
        outputContainer.classList.remove('show-output');
        copyButton.classList.remove('show-copy');
    }
}

function copiarTexto() {
    let texto = document.getElementById('output-text');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
