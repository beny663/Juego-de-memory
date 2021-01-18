function comparar(tarjetasacomparar){
    if(tarjetasacomparar[0].dataset.valor === tarjetasacomparar[1].dataset.valor){
      acierto(tarjetasacomparar)
    }
    else{
      error(tarjetasacomparar)
    }
    
  }
  
  
  function acierto(tarjetasacomparar){
    tarjetasacomparar.forEach(function(e){
    e.classList.add("acertada")
    });
  }
  
  
  function error(tarjetasacomparar){
    tarjetasacomparar.forEach(function(e){
      e.classList.add("error")
      });

    setTimeout(
      function(){
        tarjetasacomparar.forEach(function(e){
          e.classList.remove("descubierta");
          e.classList.remove("error");
          });
      },2000
    );
   
  }
  