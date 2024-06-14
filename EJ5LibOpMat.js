function operaciones(){
    var nro1 = parseFloat(document.getElementById('num1').value);
    var nro2 = parseFloat(document.getElementById('num2').value);
    var suma = nro1 + nro2;
    var resta = nro1 + nro2;
    var division = nro1 / nro2;
    var multiplicacion = nro1 * nro2;
    var potencia = Math.pow(nro1, nro2);
    var cuadrado = nro1 * nro1;
    var res = "Suma: " + suma + "<br>" +
    "Resta: " + resta + "<br>" +
    "División: " + division + "<br>" +
    "Multiplicación: " + multiplicacion + "<br>" +
    "Potencia: " + potencia + "<br>" +
    "Cuadrado: " + cuadrado + "<br>";
    document.getElementById('res').innerHTML = res;
}