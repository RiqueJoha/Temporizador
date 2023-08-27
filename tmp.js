const inputResultado=document.querySelector("#resultado");
const inputSeg=document.querySelector("#segundos");
const inputMin=document.querySelector("#minutos");
const inputHs=document.querySelector("#horas");

function iniciar() {
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    const intervalo = 1000; 

   

    function mostrarTiempo() {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          horas++;
        }
      }
     inputResultado.value=`${horas}:${minutos}:${segundos}`;
     inputSeg.value=`${segundos} Segundos`
     inputMin.value=`${minutos} Minutos`
     inputHs.value=`${horas} Horas`
    }
    
   
    const temporizador = setInterval(mostrarTiempo, intervalo);
    
    
    setTimeout(() => {
      clearInterval(temporizador);
      inputResultado.value="Temporizador detenido.";
    }, 5 * 60 * 1000); // Detener después de 5 minutos (5 * 60 * 1000 ms)
}