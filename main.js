//Declaração/criaçãoda função tocaSomCade
function tocaSomCade() {
    document.querySelector('#som_tecla_cade').play();
}
//chamada ou invocação da função tocaSomCade ao clicar no botão
document.querySelector('.tecla_cade').onclick = tocaSomCade;
<button onclick="tocaSomCade()" class="tecla tecla_Cade">Cade</button>
document.querySelector('.tecla_cade');
document.querySelector('.tecla_cade').onclick=function(){
    document.querySelector('.tecla_cade').onclick=tocaSomCade;
}
const listadeTeclas= document.querySelectorAll('.teecla');
listadeTeclas[0].onclick= tocaSomCade
while(){

}