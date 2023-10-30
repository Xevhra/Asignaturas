let minutos = 0;
let segundos = 0;
let milisegundos = 0;

setInterval(ejecutarCronometro, 1000)


function ejecutarCronometro() {

   while(true)
   {
    minutos++;
   }

    
    document.getElementById("minutos").innerHTML = minutos;

}

function resetearCrono() {

}

function playPause() {

}