function reparteTarjetas() {
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";
    // EJERCICIO: recorre el array de tarjetasBarajadas y para cada
    // elemento, crea un div (cárgalo en una variable) y declara que su
    // innerHTML es el div con la clase "tarjeta" y en el interior
    // del mismo, un div con la clase "tarjeta__contenido".
    // Añade además el valor del elemento como contenido de la tarjeta
    tarjetasBarajadas.forEach(function(elemento){
     var tarjeta= document.createElement("div");
      tarjeta.innerHTML="<div class='tarjeta' data-valor="+elemento+">"+"<center>"+
      "<div class='tarjeta__contenido'>"+"<center>"+
       elemento+"</center>"+"</center>"+
       "</div>"+
       "</div>";
       // EJERCICIO: una vez has creado la tarjeta, y todavía dentro del
       // loop, añade la tarjeta generada como "child" del nodo mesa.
      mesa.appendChild(tarjeta)
   });
  }