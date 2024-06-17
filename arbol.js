function toggleCiudades(elemento) {
    var ciudades = elemento.nextElementSibling;
    if (ciudades.style.display === 'none') {
        ciudades.style.display = 'block';
        elemento.textContent = '-';
        elemento.parentNode.classList.remove('provincia');
    } else {
        ciudades.style.display = 'none';
        elemento.textContent = '+';
        elemento.parentNode.classList.add('provincia');
    }
}