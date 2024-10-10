addEventListener("DOMContentLoaded", function() {
    var contenido = localStorage.getItem("texto");
    document.getElementById("data").innerHTML = contenido;
});