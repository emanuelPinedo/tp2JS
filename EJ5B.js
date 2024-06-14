// Función de suma
function suma(X, Y) {
    return X + Y;
}

// Función de resta
function resta(X, Y) {
    return X - Y;
}

// Función de división
function division(X, Y) {
    if (Y === 0) {
        console.error("Error: División por cero");
        return "Error: División por cero"; // Manejar división por cero
    }
    return X / Y;
}

// Función de multiplicación
function multiplicacion(X, Y) {
    return X * Y;
}

function operaciones(tipo) {
    var nro1 = parseFloat(document.getElementById('num1').value);
    var nro2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    switch (tipo) {
        case 'sumar':
            resultado = suma(nro1, nro2);
            break;
        case 'restar':
            resultado = resta(nro1, nro2);
            break;
        case 'dividir':
            resultado = division(nro1, nro2);
            break;
        case 'multiplicar':
            resultado = multiplicacion(nro1, nro2);
            break;
    }

    document.getElementById('res').value = resultado;
}