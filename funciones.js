// Función para cambiar de sección
function mostrarSeccion(nombreSeccion) {
    // Ocultar todas las secciones
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar solo la sección seleccionada
    document.getElementById(nombreSeccion).style.display = 'block';
    
    // Subir al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar sección de inicio al cargar la App
window.onload = function() {
    mostrarSeccion('inicio');
};