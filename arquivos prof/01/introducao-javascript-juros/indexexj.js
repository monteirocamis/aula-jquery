var todosOsJuros = document.querySelectorAll(".juros");
// console.log(todosOsAlunos);


for (var i = 0; i < todosOsAlunos.length; i++) {
    // console.log(todosOsAlunos[i]);

    var juros = todosOsJuros[i];
    var tdColunaTaxa = aluno.querySelector(".info-taxa");
    console.log(tdColunaTaxa);
    var colunaTaxa = tdColunaTaxa.textContent;
    var tdColunaTempo = juros.querySelector(".info-tempo");
    var colunaTempo = tdcolunaTempo.textContent;
    var resultadoFinal = aluno.querySelector(".info-resultado");

    var notaEhValida = true;    

    if (colunaTaxa < 0 || colunaTaxa > 10) {
        notaEhValida = false;
        resultadoFinal.textContent = "Nota Inválida";
    }

    if (notaEhValida) {
        var resultadoCalculado =
            // ((parseFloat(colunaTaxa) + parseFloat(colunaTempo)) / 2);
            calcularResultado(colunaTaxa, colunaTempo);
        if (resultadoCalculado < 5) {
            // aluno.style.backgroundColor = "red";
            aluno.classList.add("abaixo-da-resultado");
        }
        resultadoFinal.textContent = resultadoCalculado.toFixed(2);
    }

}

function calcularresultado(provaUm, provaDois) {
    var resultadoDentroDaFuncao = 0;
    resultadoDentroDaFuncao = ((parseFloat(provaUm) + parseFloat(provaDois)) / 2);
    return resultadoDentroDaFuncao;
}

// http://dontpad.com/reprograma-js-jquery