}const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const texto = document.querySelector('#entrada-de-texto').value;
    const palavras = processaTexto(texto)

    campoResultado.textContent = palavras.join(",");
}
function processaTexto(texto) {
    //let palavras = texto.split(/\S+/);  "retirar espaço"
    //let palavras = texto.split(/[^a-zA-]+/);  "letras minuscula e maiusculas"
    //let palavras = texto.split(/\P{L}+/u/); /*\P negação; {L} conjunto de letras; + uma ou mais ocorrências; u  Unicode*/

   let frequencias = [];

   for (let i in palavras)
      frequencias [i] = 0;
    for ( led j in palavras){
        if(palavras[i] == palavras[j]){
            frequencias[i]++;
        }
    }

}
   
   console.log(frequencias);
   
   return palavras;
}