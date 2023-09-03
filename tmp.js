const inputResultado = document.querySelector("#resultado");
const inputSeg = document.querySelector("#segundos");
const inputMin = document.querySelector("#minutos");
const inputHs = document.querySelector("#horas");

let segundosColocados = 0;
let minutoColocados = 0;
let horasColocadas = 0;

function iniciar() {

  segundosColocados = inputSeg.value;
  minutoColocados = inputMin.value;
  horasColocadas = inputHs.value;


  const idInterval3 = setInterval(() => {
    inputResultado.value = `${horasColocadas}:${minutoColocados}:${segundosColocados}`
    segundosColocados--;



    if (minutoColocados < 0 && segundosColocados < 0) {
      horasColocadas = 0
      minutoColocados = 59;
      segundosColocados = 60;
      segundosColocados--;

    }

    if ((segundosColocados < 0) && (minutoColocados < 60)) {
      minutoColocados--;
      segundosColocados = 60;
      segundosColocados--;
    }
    if ((segundosColocados == 0) && (minutoColocados == 0)&&(horasColocadas==0)) {
      clearInterval(idInterval3);
      alert("termino el tiempo")
    }


  }, 1000);

};
