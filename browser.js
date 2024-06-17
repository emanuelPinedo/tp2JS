window.onload = function() {
    var navegador = detectarNavegador();
    switch (navegador) {
        case 'Microsoft Internet Explorer':
            window.location.href = 'http://www.microsoft.com/ie';
            break;
        case 'Firefox':
            window.location.href = 'http://www.mozilla.com/firefox/';
            break;
        case 'Konqueror':
            window.location.href = 'http://konqueror.org';
            break;
        default:
            document.getElementById('mensaje').innerHTML = 'Browser desconocido';
    }
};

function detectarNavegador() {
    var agenteUsuario = navigator.userAgent;
    if (agenteUsuario.indexOf('MSIE') !== -1 || agenteUsuario.indexOf('Trident') !== -1) {
        return 'Microsoft Internet Explorer';
    } else if (agenteUsuario.indexOf('Firefox') !== -1) {
        return 'Firefox';
    } else if (agenteUsuario.indexOf('Konqueror') !== -1) {
        return 'Konqueror';
    } else {
        return 'Desconocido';
    }
}