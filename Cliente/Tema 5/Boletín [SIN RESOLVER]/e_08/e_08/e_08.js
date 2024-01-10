/*
Dado el documento HTML facilitado con este ejercicio, añadir un manejador de
eventos que impida que se introduzcan dígitos en el input.
*/

document.getElementById("txtEntrada").addEventListener("keydown", bloqueaDigitos);

function bloqueaDigitos(event) {
  let codigoTecla = event.keyCode;
  if ((codigoTecla >= 48 && codigoTecla <= 57) || (codigoTecla >= 96 && codigoTecla <= 105)) {
    event.preventDefault();
  }
}
