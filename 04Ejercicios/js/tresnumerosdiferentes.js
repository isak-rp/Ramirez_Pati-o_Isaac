document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const numero3Input = document.getElementById('numero3');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultado = document.getElementById('resultado');

    // Agregar evento de clic al botón de calcular
    calcularBtn.addEventListener('click', function() {
        // Obtener los números ingresados por el usuario
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);
        const numero3 = parseFloat(numero3Input.value);

        // Encontrar el número mayor
        let numeroMayor;
        if (numero1 > numero2 && numero1 > numero3) {
            numeroMayor = numero1;
        } else if (numero2 > numero1 && numero2 > numero3) {
            numeroMayor = numero2;
        } else {
            numeroMayor = numero3;
        }

        // Mostrar el resultado en el DOM
        mostrarResultado(`El número mayor es: ${numeroMayor}`);
    });

    // Función para mostrar el resultado
    function mostrarResultado(mensaje) {
        resultado.textContent = mensaje;
    }
});
