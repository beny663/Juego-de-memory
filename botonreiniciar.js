function funcionquitar(){
    cuerpo.classList.remove("quitar")
    botonreiniciar.classList.add("reiniciar")
    segundos=0
    minutos=0
    barajaTarjetas()
    iniciarReparto()
}
botonreiniciar.addEventListener("click", funcionquitar);
