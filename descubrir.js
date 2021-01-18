function descubrir() {
    var descubiertas;
    var totaldescubiertas =document.querySelectorAll(".descubierta:not(.acertada)")
    
    if(totaldescubiertas.length>1){
      return
  
    }
    this.classList.add("descubierta");
    descubiertas=document.querySelectorAll(".descubierta:not(.acertada")
    if(descubiertas < 2){
      return
  
    }
   
  comparar(descubiertas)
  actualizarcontador2()
  var tarjetaspendientes;
  tarjetaspendientes=document.querySelectorAll(".tarjeta:not(.acertada)")
  if(tarjetaspendientes.length===0){
      finalizar()
      
    }
  reiniciar()

  }