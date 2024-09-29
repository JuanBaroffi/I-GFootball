// Función que alterna la visibilidad de la lista
function toggleList(id) {
    var ul = document.getElementById(id);
    if (ul.style.display === "none" || ul.style.display === "") {
        ul.style.display = "block";  // Muestra la lista
    } else {
        ul.style.display = "none";   // Oculta la lista
    }
}
