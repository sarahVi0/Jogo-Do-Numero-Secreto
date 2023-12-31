//Variáveis
let listaDeNumeros = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

 //Funções
 function verificarChute(){
   let chute = document.querySelector('input').value;
   console.log(chute == numSecreto); 

   if(chute == numSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if(chute > numSecreto){
      exibirTextoNaTela('p', `O número secreto é menor que ${chute}..`);
    } else {
      exibirTextoNaTela('p', `O número secreto é maior que ${chute}..`);
    } 
      tentativas++;
      limparCampo();
  } 
 } 



function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto; 
}

function gerarNumAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
   let quantiaDeElementosLista = listaDeNumeros.length;

   if(quantiaDeElementosLista == numLimite){
    listaDeNumeros = [];
   }

   if(listaDeNumeros.includes(numeroEscolhido)){
    return gerarNumAleatorio();
   } else {
    listaDeNumeros.push(numeroEscolhido);
    console.log(listaDeNumeros);
    return numeroEscolhido;
   }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = ' ';
}
 
function reiniciarJogo() {
  numSecreto = gerarNumAleatorio();
  tentativas = 1;
  limparCampo();
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
  //let titulo = document.querySelector('h1');
 //titulo.innerHTML =  'Jogo do Número Secreto';
 exibirTextoNaTela('h1', 'Jogo do Número Secreto');

 //let paragrafo = document.querySelector('p');
 //paragrafo.innerHTML = 'Escolha um número entre 1 e 10!';
 exibirTextoNaTela('p', 'Escolha um número entre 1 e 10!');
}

exibirMensagemInicial();