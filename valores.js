function valorSeleccionado(valor) {
    if (valor < 0) {
        return -1;
    } else if (valor >= 0 && valor < 10) {
        return 0;
    } else if (valor >= 10 && valor < 50) {
        return 1;
    } else if (valor >= 50 && valor < 100) {
        return 2;
    } else if (valor >= 100) {
        return 3;
    }
}

function enviarValor() {
    var valor = parseFloat(document.getElementById('valor').value);
    var resultado;

    if (isNaN(valor)) {
        resultado = "Por favor, ingrese un número válido.";
    } else {
        resultado = valorSeleccionado(valor);
    }

    document.getElementById('res').innerHTML = resultado;
}