function actualizarcontador2(){
    
    movimientos++;
    movimientostexto=movimientos;
    if(movimientos<10){
        movimientostexto="0"+movimientos
    }
document.querySelector("#mov").innerText= movimientostexto;
}
