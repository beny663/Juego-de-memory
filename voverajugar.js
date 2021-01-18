function volverajugar(){
  var ganar;
    var cuerpo;
    ganar=document.querySelector("#ganar")
    cuerpo=document.querySelector("#todo")
    cuerpo.classList.remove("quitar")
   ganar.classList.add("reiniciar")
    iniciarReparto()
    
}