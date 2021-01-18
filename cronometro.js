
function iniciarcronometro(){
    
    
    function actualizarcontador(){
    
    segundos++;
    if(segundos>59){
      segundos= 0;
      minutos=minutos+1;
    }
    minutostexto=minutos;
    segundostexto=segundos;
    if(segundos<10){
        segundostexto="0"+segundos;
    }
    if(minutos<10){
        minutostexto="0"+minutos;
    }
    document.querySelector("#minutos").innerText=minutostexto;
    document.querySelector("#segundos").innerText=segundostexto;
    }
    if(iniciarcronometro=true){
       clearInterval(cronometro)
    }
  
   
    
    
   cronometro= setInterval(actualizarcontador,1000);
}


