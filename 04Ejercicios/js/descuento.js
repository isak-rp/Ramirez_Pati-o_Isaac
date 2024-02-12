document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const totalCompraInput = document.getElementById('totalCompra');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener el valor total de la compra ingresado por el usuario
        const totalCompra = totalCompraInput.value.trim();

        // Validar que el valor ingresado sea un monto válido
        if (!validarMonto(totalCompra)) {
            mostrarError("Por favor ingresa un monto válido.");
            return;
        }

        // Convertir el valor a un número decimal
        const monto = parseFloat(totalCompra);
        
        // Calcular el descuento (15%)
        const descuento = monto * 0.15;
        
        // Calcular el monto final a pagar después del descuento
        const montoFinal = monto - descuento;

        // Mostrar el resultado en el DOM
        mostrarResultado(`El monto final a pagar es: $${montoFinal.toFixed(2)}`);
    });

    // Función para mostrar un mensaje de error
    function mostrarError(mensaje) {
        resultado.innerHTML = `<span class="error">${mensaje}</span>`;
    }

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.innerHTML = mensaje;
    }

    // Función para validar el monto ingresado
    function validarMonto(monto) {
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(monto);
    }
});
