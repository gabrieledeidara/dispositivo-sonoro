//Declaração/criação da função tocaSomCade
function tocaSomCade() {
    document.querySelector('#som_tecla_cade').play();
}

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a consstante listaDeTeclas e o índice "0" do somCade
listaDeTeclas[0].onclick = tocaSomCade;



