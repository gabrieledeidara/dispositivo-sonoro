//Declaração/criação da função tocaSomCade
function tocaSomCade() {
    document.querySelector('#som_tecla_cade').play();
}

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomCade;
    contador = contador + 1;
}


