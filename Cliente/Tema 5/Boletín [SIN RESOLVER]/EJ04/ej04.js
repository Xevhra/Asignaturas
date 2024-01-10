frmEntrada.btnAgregar.addEventListener("click", agregarProvincia);
frmEntrada.btnPasarDerecha.addEventListener("click", pasarDerecha);
frmEntrada.btnPasarIzquierda.addEventListener("click", pasarIzquierda);

function agregarProvincia() {
  let codigo = frmEntrada.txtCodigo.value.trim();
  let provincia = frmEntrada.txtProvincia.value.trim();

  let provinciaExistente = Array.from(frmEntrada.lstProvincias.options).some(
    (opt) => opt.value === codigo
  );

  if (!provinciaExistente) {
    let opcion = '<option value="' + codigo + '">' + provincia + "</option>";
    frmEntrada.lstProvincias.innerHTML += opcion;
  } else {
    alert("Ya existe una provincia con el mismo código.");
  }
}

function pasarDerecha() {}

function pasarIzquierda() {
  for (let provincia of frmEntrada.lstDestino.options) {
    if (provincia.selected) {
      frmEntrada.lstProvincias.append(provincia);
    }
  }
}
