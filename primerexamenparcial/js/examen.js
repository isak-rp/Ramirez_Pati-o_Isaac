document.getElementById('formulario-inversion').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var dias = parseInt(document.getElementById('dias').value);
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    
    if (dias <= 0 || dias > 730) {
      alert("Por favor, ingrese un número de días válido (1-730).");
      return;
    }
    
    // Expresión regular para verificar que la cantidad ingresada sea un número válido
    var cantidadRegex = /^\d+(\.\d{1,2})?$/;
    if (!cantidadRegex.test(cantidad)) {
      alert("Por favor, ingrese una cantidad de dinero válida.");
      return;
    }
    
    var cantidadTotal = cantidad;
    var gananciaTotal = 0; // Inicializamos la ganancia total en 0
    
    var datosInversion = [];
    
    for (var i = 1; i <= dias; i++) {
      var interesDiario = cantidadTotal * 0.37 / 365;
      cantidadTotal += interesDiario;
      datosInversion.push({ dia: i, cantidad: cantidadTotal });
    }
    
    var cuerpoTabla = document.getElementById('cuerpo-inversion');
    cuerpoTabla.innerHTML = '';
    var total = 0;
    datosInversion.forEach(function(data) {
      var fila = document.createElement('tr');
      var diaCelda = document.createElement('td');
      diaCelda.textContent = data.dia;
      var cantidadCelda = document.createElement('td');
      cantidadCelda.textContent = '$' + data.cantidad.toFixed(2);
      fila.appendChild(diaCelda);
      fila.appendChild(cantidadCelda);
      cuerpoTabla.appendChild(fila);
      gananciaTotal = data.cantidad - cantidad; // Actualizamos la ganancia total
      total += data.cantidad;
    });
  
    var totalDiv = document.getElementById('total');
    totalDiv.innerHTML = "<p>Ganancia total: $" + gananciaTotal.toFixed(2) + "</p>"; // Mostramos la ganancia total en lugar del total acumulado
  });
