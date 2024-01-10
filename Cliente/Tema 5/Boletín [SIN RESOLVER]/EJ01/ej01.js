formulario.consultar.addEventListener("click", mostrardatos);

function mostrardatos() {
  for (let actor of formulario.actores) {
    if (actor.checked) {
      console.log(actor.value);
    }
  }
}
