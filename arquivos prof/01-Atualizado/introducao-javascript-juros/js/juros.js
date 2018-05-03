// calcula o juros do primeiro elemento da lista

var infoJuros = document.querySelector("#first-row"); 
console.log(infoJuros);

var tdDinheiro = infoJuros.querySelector(".info-dinheiro"); 
var dinheiro = tdDinheiro.textContent; 
console.log(dinheiro);
var tdTaxa = infoJuros.querySelector(".info-taxa");
var taxa = tdTaxa.textContent;
console.log(taxa);
var tdTempo = infoJuros.querySelector(".info-tempo");
var tempo = tdTempo.textContent;
console.log(tempo);
var tdResultado = infoJuros.querySelector(".info-resultado")

// dinheiro * juros/100 * quantidade meses

var jurosCalculado = ((parseFloat(dinheiro) * parseFloat(taxa/100)) * parseInt(tempo));

tdResultado.textContent = jurosCalculado.toFixed(2);

console.log(jurosCalculado);