function calcularComisiones() {
    // Obtener referencias a los elementos del DOM
    const sueldoBaseInput = document.getElementById('sueldoBase');
    const venta1Input = document.getElementById('venta1');
    const venta2Input = document.getElementById('venta2');
    const venta3Input = document.getElementById('venta3');
    const resultado = document.getElementById('resultado');

    // Obtener los valores ingresados por el usuario
    const sueldoBase = parseFloat(sueldoBaseInput.value.trim());
    const venta1 = parseFloat(venta1Input.value.trim());
    const venta2 = parseFloat(venta2Input.value.trim());
    const venta3 = parseFloat(venta3Input.value.trim());

    // Validar que todos los campos ingresados sean válidos
    if (!validarMontoNoNegativo(sueldoBase) || !validarMontoNoNegativo(venta1) || !validarMontoNoNegativo(venta2) || !validarMontoNoNegativo(venta3)) {
        mostrarError("Por favor ingresa valores válidos (no negativos) en todos los campos.");
        return;
    }

    // Calcular la comisión de cada venta (10%)
    const comision1 = venta1 * 0.1;
    const comision2 = venta2 * 0.1;
    const comision3 = venta3 * 0.1;

    // Calcular el total de comisiones
    const totalComisiones = comision1 + comision2 + comision3;

    // Calcular el total del mes (sueldo base + comisiones)
    const totalMes = sueldoBase + totalComisiones;

    // Mostrar el resultado en el DOM
    resultado.value = totalMes.toFixed(2);
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    alert(mensaje);
}

// Función para validar el monto ingresado
function validarMontoNoNegativo(monto) {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(monto) && monto >= 0;
}
