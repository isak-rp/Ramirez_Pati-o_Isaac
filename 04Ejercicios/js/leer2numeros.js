document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener los números ingresados por el usuario
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);

        // Validar que se ingresen números válidos
        if (!validarNumero(numero1Input.value) || !validarNumero(numero2Input.value)) {
            mostrarError("Por favor ingresa números válidos en ambos campos.");
            return;
        }

        // Realizar las operaciones según las condiciones
        let resultadoOperacion;
        if (numero1 === numero2) {
            resultadoOperacion = numero1 * numero2;
        } else if (numero1 > numero2) {
            resultadoOperacion = numero1 - numero2;
        } else {
            resultadoOperacion = numero1 + numero2;
        }

        // Mostrar el resultado en el DOM
        mostrarResultado(`El resultado de la operación es: ${resultadoOperacion}`);
    });

    // Función para mostrar un mensaje de error
    function mostrarError(mensaje) {
        resultado.innerHTML = `<span class="error">${mensaje}</span>`;
    }

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.innerHTML = mensaje;
    }

    // Función para validar si un valor es un número válido
    function validarNumero(valor) {
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(valor);
    }
});
