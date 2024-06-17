function cambiarColor(color) {
    var listaColores = document.getElementById('colores');
    if (color === 'blanco') {
        listaColores.style.backgroundColor = 'white';
    } else if (color === 'negro') {
        listaColores.style.backgroundColor = 'black';
    } else if (color === 'azul') {
        listaColores.style.backgroundColor = 'blue'; // Corregido 'azul' a 'blue'
    } else if (color === 'rojo') {
        listaColores.style.backgroundColor = 'red';
    } else if (color === 'amarillo') {
        listaColores.style.backgroundColor = 'yellow';
    }
}