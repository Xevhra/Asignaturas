/*
Dado el documento HTML facilitado con este ejercicio, añadir los manejadores de
eventos necesarios para:

○ El cuadrado se ponga de color amarillo cuando el cursor del ratón se coloque
encima del mismo, para ello usa el atributo classList añadiendo la clase
amarillo preparada de antemano. Además deberá informar en la capa de
salida de texto del tipo de evento, el objeto en el que se produce, así como
las coordenadas del cursor en el momento que se desencadena. Cuando el
cursor salga del cuadrado deberá volver todo a la situación original, cuadrado
blanco y salida de texto vacía.

○ Cuando el cursor se coloque en el input de texto, cada vez que se pulse una
tecla se informará en la capa de salida de texto de la tecla pulsada.
*/

/* Ejercicio del Cuadrado: */
document.getElementById("cuadrado").addEventListener("mouseenter", colorear);
document.getElementById("cuadrado").addEventListener("mouseleave", descolorear);

/* Ejercicio del Input: */
document.getElementById("txtEntrada").addEventListener("click", escribir);
document.getElementById("txtEntrada").addEventListener("keydown", escribir);
function escribir(event) {
  document.getElementById("salida").innerHTML = event.key;
}

function colorear(event) {
  let cuadrado = document.getElementById("cuadrado").classList;
  cuadrado.add("amarillo");

  document.getElementById("salida").innerHTML = event.type + " Coordenadas X: " + event.clientX + " Coordenadas X: " + event.clientY;
}

function descolorear(event) {
  let cuadrado = document.getElementById("cuadrado").classList;
  cuadrado.remove("amarillo");
  document.getElementById("salida").innerHTML = "";
}
