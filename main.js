//Declaração/criaçãoda função tocaSomCade
function tocaSomCade() {
    document.querySelector('#som_tecla_cade').play();
}
//chamada ou invocação da função tocaSomCade ao clicar no botão
document.querySelector('.tecla_cade').onclick = tocaSomCade;
