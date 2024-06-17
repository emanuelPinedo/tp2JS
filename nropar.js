document.addEventListener("DOMContentLoaded", function() {
    var divNumerosPares = document.getElementById("res");

    for (let i = 0; i < 500; i+=2) {
        var msj = document.createElement("span");
        msj.textContent = i + " ";
        divNumerosPares.appendChild(msj);
    }
});