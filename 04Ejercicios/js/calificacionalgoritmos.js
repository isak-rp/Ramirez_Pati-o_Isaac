document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const parcial1Input = document.getElementById('parcial1');
    const parcial2Input = document.getElementById('parcial2');
    const parcial3Input = document.getElementById('parcial3');
    const examenFinalInput = document.getElementById('examenFinal');
    const trabajoFinalInput = document.getElementById('trabajoFinal');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener las calificaciones ingresadas por el usuario
        const parcial1 = parcial1Input.value.trim();
        const parcial2 = parcial2Input.value.trim();
        const parcial3 = parcial3Input.value.trim();
        const examenFinal = examenFinalInput.value.trim();
        const trabajoFinal = trabajoFinalInput.value.trim();

        // Validar que todas las calificaciones ingresadas sean válidas
        if (!validarCalificacion(parcial1) || !validarCalificacion(parcial2) || !validarCalificacion(parcial3) || 
            !validarCalificacion(examenFinal) || !validarCalificacion(trabajoFinal)) {
            mostrarError("Por favor ingresa calificaciones válidas en todos los campos.");
            return;
        }

        // Convertir las calificaciones a números decimales
        const parcial1Numerico = parseFloat(parcial1);
        const parcial2Numerico = parseFloat(parcial2);
        const parcial3Numerico = parseFloat(parcial3);
        const examenFinalNumerico = parseFloat(examenFinal);
        const trabajoFinalNumerico = parseFloat(trabajoFinal);

        // Calcular el promedio de los parciales (55%)
        const promedioParciales = (parcial1Numerico + parcial2Numerico + parcial3Numerico) / 3;
        const calificacionParciales = promedioParciales * 0.55;

        // Calcular la calificación final
        const calificacionFinal = calificacionParciales + (examenFinalNumerico * 0.3) + (trabajoFinalNumerico * 0.15);

        // Mostrar el resultado en el DOM
        mostrarResultado(`La calificación final del alumno es: ${calificacionFinal.toFixed(2)}`);
    });

    // Función para mostrar un mensaje de error
    function mostrarError(mensaje) {
        resultado.innerHTML = `<span class="error">${mensaje}</span>`;
    }

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.innerHTML = mensaje;
    }

    // Función para validar la calificación ingresada
    function validarCalificacion(calificacion) {
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(calificacion);
    }
});
