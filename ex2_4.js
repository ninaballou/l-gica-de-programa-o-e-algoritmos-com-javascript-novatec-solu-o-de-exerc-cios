function calculoPeso(){
    var inPreco = document.getElementById("inPreco");
    var inGramas = document.getElementById("inGramas");
    var outValor = document.getElementById("outValor");

    var preco = Number(inPreco.value);
    var gramas = Number(inGramas.value);
    var total = (preco / 1000) * gramas;

    outValor.textContent = "Valor à pagar R$ " + total.toFixed(2);
}

var btCalcularPreco = document.getElementById("btCalcularPreco");
btCalcularPreco.addEventListener("click", calculoPeso);