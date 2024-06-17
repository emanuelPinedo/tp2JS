document.addEventListener("DOMContentLoaded", function() {
    var divResultados = document.getElementById("res");
    
    // Función para calcular f(x) = 3 * x + 5 - x^2
    function calcularFuncion(x) {
        return 3 * x + 5 - Math.pow(x, 2);
    }
    
    // Mostrar los primeros 100 números de la función en el div
    for (var x = 0; x < 100; x++) {
        var resultado = calcularFuncion(x);
        var span = document.createElement("span");
        span.textContent = resultado + " ";
        divResultados.appendChild(span);
    }
});