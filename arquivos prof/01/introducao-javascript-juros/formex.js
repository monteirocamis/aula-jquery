var adicionarJuroS = document.querySelector("#adicionar-juros");
adicionarJuroS.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var juros = obtemDadosDoForm(form);

    var jurosTr = document.createElement("tr");

    if (!validaJuros(juros)) {
        var erro = document.querySelector("#mensagem-erro");
        return erro.innerHTML = "O juro 1 está incorreto.";
    }

    var dinheiroTd = document.createElement("td");
    var taxaTd = document.createElement("td");
    var tempoTd = document.createElement("td");
    var resultadoTd = document.createElement("td");
    
    dinheiroTd.textContent = juros.dinheiro;
    taxaTd.textContent = juros.taxa;
    tempoTd.textContent = juros.tempo;
    resultadoTd.textContent = juros.resultado;
    
    jurosTr.appendChild(dinheiroTd);
    jurosTr.appendChild(taxaTd);
    jurosTr.appendChild(tempoTd);
    jurosTr.appendChild(resultadoTd);
   
    var tabela = document.querySelector("#tabela-juros");

    tabela.appendChild(jurosTr);
   
    form.reset();

});

function obtemDadosDoForm(form) {

    var jurosRetorno = {
        dinheiro: form.dinheiro.value,
        taxa: form.taxa.value,
        tempo: form.tempo.value,
        resultado: calculaResultado(form.taxa.value, form.tempo.value)
    }
    console.log(jurosRetorno);
    return jurosRetorno;
}

function validaJuro(juros) {
    if (juros.taxa > 0 && juros.taxa <= 10) {
        return true;
        alert('oi');
    }
}