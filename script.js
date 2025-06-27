const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const texto = document.querySelector('#entrada-de-texto').value;
    const palavras = texto.split("")

    campoResultado.textContent = palavras.join(",");
}