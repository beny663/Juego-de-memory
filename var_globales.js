var movimientos=0;
var barajasTotales;
var botonreiniciar;
var cuerpo;
var movimientostexto;

cuerpo=document.querySelector("#todo")
botonreiniciar=document.querySelector(".reiniciar")
barajasTotales=document.querySelector(".tarjetas")
var segundos =0
    var  minutos=0
    var minutostexto;
    var segundostexto;
    var  cronometro;
var grupoTarjetas = [ "🍦", "🌈","🚲", "👽",  "🤖", "👹", "👺"];
//
// EJERCICIO: concatena grupoTarjetas consigo misma para duplicar
// los valores
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
