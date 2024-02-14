document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const horasNormalesInput = document.getElementById('horasNormales');
    const horasExtrasInput = document.getElementById('horasExtras');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener las horas ingresadas por el usuario
        const horasNormales = parseInt(horasNormalesInput.value);
        const horasExtras = parseInt(horasExtrasInput.value);

        // Calcular el pago por horas extras según las condiciones dadas
        let pagoHorasExtras;
        if (horasExtras <= 8) {
            pagoHorasExtras = horasExtras * 2;
        } else {
            const horasExtrasNormales = 8;
            const horasExtrasDoble = horasExtras - horasExtrasNormales;
            pagoHorasExtras = horasExtrasNormales * 2 + horasExtrasDoble * 3;
        }

        // Calcular el pago total sumando el pago por horas normales y extras
        const pagoTotal = horasNormales + pagoHorasExtras;

        // Mostrar el resultado en el DOM
        mostrarResultado(`El pago por horas extras es: $${pagoHorasExtras}. El pago total es: $${pagoTotal}`);
    });

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.textContent = mensaje;
    }
});
