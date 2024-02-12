document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');
    const resultadoAbajo = document.getElementById('resultadoAbajo');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener la fecha de nacimiento ingresada por el usuario
        const fechaNacimiento = new Date(fechaNacimientoInput.value);

        // Obtener la fecha actual
        const fechaActual = new Date();

        // Calcular la diferencia de años entre la fecha actual y la fecha de nacimiento
        const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

        // Verificar si el cumpleaños ya pasó este año
        if (fechaNacimiento.getMonth() > fechaActual.getMonth() || 
            (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
            // Si no ha pasado, restar un año a la edad
            edad--;
        }

        // Mostrar el resultado en el DOM
        resultado.innerHTML = `La edad de la persona es: ${edad} años`;

    });
});
