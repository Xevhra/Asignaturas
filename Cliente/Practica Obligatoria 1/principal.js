//Aquí van las funciones
function generarDatosDePrueba(){
    
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
    ocultarTodosLosFormularios();
  
    // Hacemos visible el formulario que llega como parámetro
    switch (sFormularioVisible) {
      case "frmAltaCliente":
        frmAltaCliente.style.display = "block";
        break;
      case "frmTallaje":
        frmTallaje.style.display = "block";
        break;
      case "frmListadoPerennes":
        frmListadoPerennes.style.display = "block";
        break;
      case "frmListadoCaducos":
        frmListadoCaducos.style.display = "block";
        break;
      case "TotalArboles":
        alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
        break;
    }
  }
  
  function mostrarAltaCliente() {
    ocultarTodosLosFormularios();
  
    // Hacemos visible el formulario
    frmAltaCliente.style.display = "block";
  }
  
  function ocultarTodosLosFormularios() {
    let oFormularios = document.querySelectorAll("form");
  
    for (let i = 0; i < oFormularios.length; i++) {
      oFormularios[i].style.display = "none";
    }
  }




//Aquí va el main



function aceptarAltaCliente(){
// Recogida de datos
let cliente;
let DNI = Number(frmAltaCliente.txtDNI.value.trim());
let nombre = String(frmAltaCliente.txtNombre.value.trim());
let apellidos = String(frmAltaCliente.txtApellidos.value.trim());

// Comprobaciones nececesarias

if (DNI.toString().length < 8) {
    alert("No es un dni valido");
} else {

     // En caso chachipiruli creamos un objeto cliente

   alert("Se ha creado un cliente");
  }



// Llamamos a altaCliente()




}

function acptarAltaVehiculo(){
// Recogida de datos
// Comprobaciones nececesarias
// En caso chachipiruli creamos un objeto Vehiculo(coche o moto)
// Llamamos a altaVehiculo()
}

function aceptarBajaAlquilelr(){
// Recogida de datos
// Comprobaciones nececesarias
// En caso chachipiruli creamos un objeto Vehiculo(coche o moto)
// Llamamos a altaVehiculo()
}

