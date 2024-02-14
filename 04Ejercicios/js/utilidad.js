document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const salarioMensualInput = document.getElementById('salarioMensual');
    const antiguedadSelect = document.getElementById('antiguedad');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener el salario mensual ingresado por el usuario
        const salarioMensual = parseFloat(salarioMensualInput.value);

        // Obtener la antigüedad seleccionada por el usuario
        const antiguedad = antiguedadSelect.value;

        // Calcular la utilidad según la antigüedad
        let utilidad;
        switch (antiguedad) {
            case "menos de 1 año":
                utilidad = salarioMensual * 0.05;
                break;
            case "1 año o más y menos de 2 años":
                utilidad = salarioMensual * 0.07;
                break;
            case "2 años o más y menos de 5 años":
                utilidad = salarioMensual * 0.10;
                break;
            case "5 años o más y menos de 10 años":
                utilidad = salarioMensual * 0.15;
                break;
            case "10 años o más":
                utilidad = salarioMensual * 0.20;
                break;
        }

        // Mostrar el resultado en el DOM
        mostrarResultado(`La utilidad anual es: $${utilidad.toFixed(2)}`);
    });

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.textContent = mensaje;
    }
});
