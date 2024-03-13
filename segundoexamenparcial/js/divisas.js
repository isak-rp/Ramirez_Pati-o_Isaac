document.addEventListener('DOMContentLoaded', function () {
    var imagenPrincipal = document.getElementById('imagenPrincipal');
    imagenPrincipal.style.display = "block"; // Mostrar la primer imagen al cargar la página
    var botonConvertir = document.getElementById('botonConvertir');

    botonConvertir.addEventListener('click', function () {
        validarCantidad();
    });
});

function validarCantidad() {
    var cantidad = document.getElementById('amount').value;
    var spanCantidad = document.getElementById('spanCantidad');
    var imagenPrincipal = document.getElementById('imagenPrincipal');
    var imagen2 = document.getElementById('imagen2');
    var imagen3 = document.getElementById('imagen3');
    var gifError = document.getElementById('gifError');
    imagenPrincipal.style.display = "block";
    imagen2.style.display = "none";
    imagen3.style.display = "none";
    gifError.style.display = "none";
    spanCantidad.innerText = "";

    if (cantidad == "") {
        spanCantidad.innerText = "No ingresaste nada";
        imagenPrincipal.style.display = "none";
        gifError.style.display = "block";
    } else {
        var esCadena = isNaN(cantidad);

        if (esCadena == true) {
            spanCantidad.innerText = "Es una Cadena";
            imagenPrincipal.style.display = "none";
            gifError.style.display = "block";
        } else {
            var numero = parseFloat(cantidad);
            if (numero <= 0) {
                spanCantidad.innerText = "Número inválido";
                imagenPrincipal.style.display = "none";
                gifError.style.display = "block";
            } else {
                convertirDivisa();
            }
        }
    }
}

function convertirDivisa() {
    const cantidad = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    const imagen2 = document.getElementById('imagen2');
    const imagen3 = document.getElementById('imagen3');

    const apiKey = 'TU_CLAVE_API';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red - ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const resultado = cantidad * exchangeRate;

            document.getElementById('resultadoConversion').textContent = `${cantidad} ${fromCurrency} es aproximadamente ${resultado.toFixed(2)} ${toCurrency}`;

            if (fromCurrency === 'EUR' && toCurrency === 'JPY') {
                imagenPrincipal.style.display = "none";
                imagen2.style.display = "block";
                imagen3.style.display = "none";
            } else if (fromCurrency === 'JPY' && toCurrency === 'EUR') {
                imagenPrincipal.style.display = "none";
                imagen2.style.display = "none";
                imagen3.style.display = "block";
            } else {
                imagenPrincipal.style.display = "block";
                imagen2.style.display = "none";
                imagen3.style.display = "none";
            }
        })
        .catch(error => {
            console.error('Error al recuperar datos:', error);
        });
}
