document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const totalHombresInput = document.getElementById('totalHombres');
    const totalMujeresInput = document.getElementById('totalMujeres');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener el total de hombres y mujeres ingresados por el usuario
        const totalHombres = parseInt(totalHombresInput.value);
        const totalMujeres = parseInt(totalMujeresInput.value);

        // Validar que se hayan ingresado valores positivos
        if (totalHombres < 0 || totalMujeres < 0) {
            mostrarError("Por favor ingresa valores positivos en ambos campos.");
            return;
        }

        // Calcular el porcentaje de hombres y mujeres
        const totalEstudiantes = totalHombres + totalMujeres;
        const porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
        const porcentajeMujeres = (totalMujeres / totalEstudiantes) * 100;

        // Mostrar el resultado en el DOM
        mostrarResultado(`Porcentaje de hombres: ${porcentajeHombres.toFixed(2)}%. Porcentaje de mujeres: ${porcentajeMujeres.toFixed(2)}%`);
    });

    // Función para mostrar un mensaje de error
    function mostrarError(mensaje) {
        resultado.innerHTML = `<span class="error">${mensaje}</span>`;
    }

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.innerHTML = mensaje;
    }
});
