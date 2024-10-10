buttonText.addEventListener("click", function() { 
    var contenido = document.getElementById("inputText").value; 
    localStorage.setItem("texto", contenido);
});