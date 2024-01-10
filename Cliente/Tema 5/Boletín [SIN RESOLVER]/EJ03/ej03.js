formulario.consultar.addEventListener("click", mostrardatos);

function mostrardatos() {
  for (let opcion of formulario.provincias.options) {
    if (opcion.selected) {
      console.log("Provincia: " + opcion.text + " - Codigo: " + opcion.value);
    }
  }
}
