/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elelmento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elelmento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que está selecionado e esconder
*/

const btnavancar = document.getElementById('btn-avancar')
const btnvoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
 const cartaoSelecionado = document.querySelector('.selecionado');
 cartaoSelecionado.classList.remove('selecionado')

}

function mostrarCartao(indiceCartao){
 cartoes[indiceCartao].classList.add('selecionado');
}

btnavancar.addEventListener('click', function () {
if(cartaoAtual === cartoes.length -1) return

esconderCartaoSelecionado();

cartaoAtual++;
mostrarCartao(cartaoAtual)
 
});

btnvoltar.addEventListener('click', function () {

 if(cartaoAtual === 0) return;

 esconderCartaoSelecionado();

 cartaoAtual--;
 mostrarCartao(cartaoAtual)

});