const inputResultado=document.querySelector("#resultado");
const inputSeg=document.querySelector("#segundos");
const inputMin=document.querySelector("#minutos");
const inputHs=document.querySelector("#horas");

let segundos=0;

function iniciar() {
   
    segundos = inputSeg.value;
    minutos= inputMin.value;
    horas=inputHs.value;

    

    const idInterval = setInterval(() => {
      inputResultado.value=`${horas}:${minutos}:${segundos}`
      segundos--;
      if (segundos<0) {
        clearInterval(idInterval);
      }
    }, 1000);

    

};