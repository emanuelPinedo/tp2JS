document.addEventListener("DOMContentLoaded", function()/*ASEGURA QUE EL CODIGO DE EJECUTE CUANDO CARGA LA PAGINA*/ {
    var meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    function recorrerConFor() {
        var ul = document.getElementById("listaFor");
        for (var i = 0; i < meses.length; i++) {
            var li = document.createElement("li");
            li.textContent = meses[i];//lee el valor y lo devuelve
            ul.appendChild(li);//añadimos el elemento a la lista
        }
    }

    function recorrerConWhile() {
        var ul = document.getElementById("listaWhile");
        var i = 0;
        while (i < meses.length) {
            var li = document.createElement("li");
            li.textContent = meses[i];//lee el valor y lo devuelve
            ul.appendChild(li);//añadimos el elemento a la lista
            i++;
        }
    }

    function recorrerConDoWhile() {
        var ul = document.getElementById("listaDoWhile");
        var i = 0;
        do {
            var li = document.createElement("li");
            li.textContent = meses[i];//lee el valor y lo devuelve
            ul.appendChild(li);//añadimos el elemento a la lista
            i++;
        } while (i < meses.length);
    }

    function recorrerConForIn() {
        var ul = document.getElementById("listaForIn");
        for (var i in meses) {
            var li = document.createElement("li");
            li.textContent = meses[i];//lee el valor y lo devuelve
            ul.appendChild(li);//añadimos el elemento a la lista
        }
    }

    // Llamar a las funciones cuando se cargue la página
    recorrerConFor();
    recorrerConWhile();
    recorrerConDoWhile();
    recorrerConForIn();
});