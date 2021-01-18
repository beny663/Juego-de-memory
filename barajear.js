
function barajaTarjetas() {
    var resultado;
    resultado = totalTarjetas.sort(function() {
      return 0.5 - Math.random();
    });
    return resultado;
  }