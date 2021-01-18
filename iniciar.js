function iniciarReparto() {
    reparteTarjetas();
    movimientos=00;
    segundos=0
    minutos=0
    document.querySelector("#mov").innerText="00";
    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
      elemento.addEventListener("click", descubrir);
    });
    document.querySelectorAll("#boton").forEach(function (elemento) {
        elemento.addEventListener("click",reiniciar);
      });
    botonrepartir.innerHTML
    iniciarcronometro()
    
  }
  document
    .querySelector("button")
    .addEventListener("click", iniciarReparto);
    document.querySelector("#sirve").addEventListener("click", volverajugar)
   