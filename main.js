//Declaração/criação da função tocaSomCade
function tocaSomCade() {
    document.querySelector('#som_tecla_cade').play();
}
//chamada ou invocação da função tocaSomCade ao clicar no botão
document.querySelector('.tecla_cade').onclick = tocaSomCade;

//Declaração/criação da função tocaSomIsso
function tocaSomIsso() {
    document.querySelector('#som_tecla_isso').play();
}
//chamada ou invocação da função tocaSomIsso ao clicar no botão
document.querySelector('.tecla_isso').onclick = tocaSomIsso;
