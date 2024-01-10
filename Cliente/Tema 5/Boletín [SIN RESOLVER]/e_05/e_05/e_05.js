/*
Dado el formulario con un checkbox que puede ser marcado o desmarcado pulsando
el botón correspondiente. Inicialmente dicho botón no hace nada, hay que añadirle el
manejador de eventos correspondiente usando uno de los dos botones que están
debajo. El otro es para eliminar dicho manejador de eventos. Si el botón tiene el
manejador de eventos permitirá marcar o desmarcar el checkbox, en caso contrario
no hará nada.
*/

function addManejador() {
  document.getElementById("botonMarcar").addEventListener("click", marcar_desmarcar);
}
function deleteManejador() {
  document.getElementById("botonMarcar").removeEventListener("click", marcar_desmarcar);
}

function marcar_desmarcar() {
  let caja = document.getElementById("verano").checked;

  if (caja == true) {
    document.getElementById("verano").checked = false;
  } else {
    document.getElementById("verano").checked = true;
  }
}
