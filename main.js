function tocaSomCade() {
    document.querySelector('#som_tecla_cade')
}
<button onclick="tocaSomCade()" class="tecla tecla_Cade">Cade</button>
document.querySelector('.tecla_cade');
document.querySelector('.tecla_cade').onclick=function(){
    document.querySelector('.tecla_cade').onclick=tocaaSomCade;
}