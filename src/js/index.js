/*
OBJETIVO - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior


*/


// 1° Pegar os elementos

const abas = document.querySelectorAll('.aba');



console.log("batata");


abas.forEach((aba => {
    //2°identificar o clique no elemento aba
    aba.addEventListener("click", function(){
    if(aba.classList.contains("selecionado")){
        return;
    }   
    selecionarAba(aba);
    mostrarInformacao(aba);

       
        


        
    })
}))

function selecionarAba(aba) {
    //3° Quando clicar Desmarca a aba selecionada
    const abaSelecionada = document.querySelector('.aba.selecionado');
    abaSelecionada.classList.remove('selecionado');

    // 4° marcar a aba clicada como selecionado
    aba.classList.add("selecionado");    
}


function mostrarInformacao(aba) {
     // 5°  Esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado");
        
        // 6° Mostrar o próximo conteudo da aba selecionado
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
        informacaoASerMostrada.classList.add("selecionado");
}









