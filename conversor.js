var conversion = {
    pesosMoneda: function(x, y){
        var res = x / y;
        return res.toFixed(2);
    },
    monedaPesos: function(x, y){
        var res = x * y;
        return res.toFixed(2);
    }
}

function rederigirPesos (){
    window.location.href = "conversorMon2.html";
}

function rederigirMoneda (){
    window.location.href = "conversorMon3.html";
}

//pesos a moneda
function pesosUsd(){
    var pesos = parseFloat(document.getElementById("pesos").value);
    var usd = 15;
    var resultado = conversion.pesosMoneda(pesos, usd);
    document.getElementById("res").innerHTML = "El resultado es " + resultado;
}

function pesosReales(){
    var pesos = parseFloat(document.getElementById("pesos").value);
    var real = 170;
    var resultado = conversion.pesosMoneda(pesos, real);
    document.getElementById("res2").innerHTML = "El resultado es " + resultado;
}

function pesosEuros(){
    var pesos = parseFloat(document.getElementById("pesos").value);
    var euro = 965;
    var resultado = conversion.pesosMoneda(pesos, euro);
    document.getElementById("res3").innerHTML = "El resultado es " + resultado;
}

//moneda a pesos
function usdPesos(){
    var usd = parseFloat(document.getElementById("moneda").value);
    var peso = 1000;
    var resultado = conversion.monedaPesos(usd, peso);
    document.getElementById("pesosUsd").innerHTML = "El resultado es " + resultado;
}

function realesPesos(){
    var real = parseFloat(document.getElementById("moneda").value);
    var peso = 170;
    var resultado = conversion.monedaPesos(real, peso);
    document.getElementById("pesosReales").innerHTML = "El resultado es " + resultado;
}

function euroPesos(){
    var euro = parseFloat(document.getElementById("moneda").value);
    var peso = 965;
    var resultado = conversion.monedaPesos(euro, peso);
    document.getElementById("pesosEuro").innerHTML = "El resultado es " + resultado;
}