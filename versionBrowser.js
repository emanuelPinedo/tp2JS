window.onload = function() {
    var versionActual = obtenerVersionNavegador();
    var versionUltima = {
        'Microsoft Internet Explorer': '11',  // Última versión de IE
        'Firefox': '91',                      // Última versión de Firefox
        'Chrome': '94'                        // Última versión de Chrome
        // Agregar más navegadores y sus versiones si es necesario
    };

    var navegador = detectarNavegador();
    if (navegador in versionUltima) {
        if (parseFloat(versionActual) < parseFloat(versionUltima[navegador])) {
            alert('Su versión de ' + navegador + ' no es la última. Por favor, actualice su navegador.');
        }
    } else {
        alert('No se puede verificar la versión para este navegador.');
    }
};

function obtenerVersionNavegador() {
    var agenteUsuario = navigator.userAgent;
    var version = '';

    if (agenteUsuario.indexOf('MSIE') !== -1 || agenteUsuario.indexOf('Trident') !== -1) {
        // Para Internet Explorer
        version = /MSIE\s?(\d+(\.\d+)?);/.exec(agenteUsuario)[1];
    } else if (agenteUsuario.indexOf('Firefox') !== -1) {
        // Para Firefox
        version = /Firefox\/(\d+(\.\d+)?)/.exec(agenteUsuario)[1];
    } else if (agenteUsuario.indexOf('Chrome') !== -1) {
        // Para Chrome
        version = /Chrome\/(\d+(\.\d+)?)/.exec(agenteUsuario)[1];
    }

    return version;
}

function detectarNavegador() {
    var agenteUsuario = navigator.userAgent;
    if (agenteUsuario.indexOf('MSIE') !== -1 || agenteUsuario.indexOf('Trident') !== -1) {
        return 'Microsoft Internet Explorer';
    } else if (agenteUsuario.indexOf('Firefox') !== -1) {
        return 'Firefox';
    } else if (agenteUsuario.indexOf('Chrome') !== -1) {
        return 'Chrome';
    } else {
        return 'Desconocido';
    }
}