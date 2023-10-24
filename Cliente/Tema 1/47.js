/* Solicitar a través de un formulario dos horas de un día, 
el sistema deberá mostrar en una capa de salida del documento 
si la primera hora es anterior o posterior a la segunda, 
además del tiempo transcurrido entre ambas en formato de hh:mm. 
Ejemplo: el usuario introduce en la primera hora 18:40 y en la segunda 22:25 de la siguiente forma, 
h1=18 m1=40 h2=22 m2=25. La salida del sistema será “H1 es anterior a H2. Han pasado 3 horas y 45 minutos”. 
Si necesitara truncar un número puede usar la función Math.floor(num). */

let hora1;
let minutos1;
let hora2;
let minutos2;

if (hora1 < Number(12) && hora2 < Number(12)) {
    if(hora1 < hora2){
        let contador1 = 0;
        for(let i = hora1; i = hora2; i++){
            contador1++;
            alert('La diferencia es: '+contador1);
        }
    }else{
        let contador1 = 0;
        for(let i = hora2; i = hora1; i++){
            contador1++;
            alert('La diferencia es: '+contador1);
        }
    }
} else {
    alert('Formato no admitido');
}
