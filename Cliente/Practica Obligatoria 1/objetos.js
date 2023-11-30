class Cliente {
    _dniCliente;
    _nombre;
    _apellidos;
    _usuario;

    constructor(dniCliente, nombre, apellidos, usuario) {
        this._dniCliente = dniCliente;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._usuario = this.rellenaUsuario();
    }

    get dniCliente() {
        return this._dniCliente;
    }
    set dniCliente(value) {
        this._dniCliente = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(value) {
        this._apellidos = value;
    }

    get usuario() {
        return this._usuario;
    }

/*1. Se almacenarán los siguientes datos de los clientes: dniCliente, nombre y apellidos.
El campo usuario será completo en minúsculo compuesto por la inicial del nombre,
las tres primeras letras del primer apellido, las tres primeras del segundo apellido y
los tres últimos dígitos del DNI. */    

    rellenaUsuario() {
        let inicialNombre = this._nombre.charAt(0).toLowerCase();
        let apellidos = this._apellidos.split(" ");
        let primerApellido = apellidos[0].slice(0, 3).toLowerCase();
        let segundoApellido = apellidos[1].slice(0, 3).toLowerCase();
        let ultimosDigitosDni = this._dniCliente.slice(-3);

        let usuarioAsignado = inicialNombre + primerApellido + segundoApellido + ultimosDigitosDni;
        usuarioAsignado = this._usuario;
        return usuarioAsignado;
    }

    altaCliente() {
        
        

    }


    toHTMLRow() {
        let fila = "<tr>";
            fila += "<td>" + this.dniCliente + "</td>";
            fila += "<td>" + this.nombre + "</td>";
            fila += "<td>" + this.apellidos + "</td>";
            fila += "<td>" + this.usuarioAsignado + "</td></tr>";
        return fila;
    }
}

/* Se mantendrán los datos de los vehículos teniendo en cuenta que hay dos tipos:
coches y motos. No puede haber dos vehículos con la misma matrícula.
a. De todos los vehículos almacenamos su identificador matrícula, marca y
modelo.
b. Si se trata de una motocicleta, nos interesa conocer si es un ciclomotor o no.
c. Si se trata de un coche, nos interesa saber el tipo de combustible (diesel,
gasolina, híbrido o eléctrico) y el número de plazas que tiene. */

class Vehiculo {
    _matricula;
    _marca;
    _modelo;

    constructor(matricula, marca, modelo) {
        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
    }

    get matricula () {
        return this._matricula;
    }

    set matricula(value) {
        this._matricula = value;
    }

    get marca() {
        return this._marca;
    }

    set marca(value) {
        this._marca = value;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(value) {
        this._modelo = value;
    }

    toHTMLRow() {
        let fila = "<tr>";
            fila += "<td>" + this.matricula + "</td>";
            fila += "<td>" + this.marca + "</td>";
            fila += "<td>" + this.modelo + "</td></tr>";
        return fila;
    }
}

class Motocicleta extends Vehiculo {
    _ciclomotor;

    constructor(matricula,modelo,marca,ciclomotor) {
        super(matricula, marca, modelo);
        this._ciclomotor = ciclomotor;
    }

    get ciclomotor() {
        return this._ciclomotor;
    }

    set ciclomotor(value) {
        this._ciclomotor = value;
    }

    toHTMLRow() {
        let fila = "<tr>";
            fila += "<td>" + this.matricula + "</td>";
            fila += "<td>" + this.marca + "</td>";
            fila += "<td>" + this.ciclomotor + "</td>"
            fila += "<td>" + this.modelo + "</td></tr>";
        return fila;
    }
}


class Coche extends Vehiculo {
    _combustible;
    _plazas;

    constructor (matricula,marca,modelo,combustible, plazas) {
        super(matricula, marca, modelo);
        this._combustible = combustible;
        this._plazas = plazas;
    }

    compruebaCombustible(combustible) {
        if (combustible.toLowerCase() === "diesel" || combustible.toLowerCase() === "gasolina" || 
            combustible.toLowerCase() === "hibrido" || combustible.toLowerCase() === "eléctrico") {
            return combustible;
        } else {
            return "Invalido";
        }
    }

    toHTMLRow() {
        let fila = "<tr>";
            fila += "<td>" + this.matricula + "</td>";
            fila += "<td>" + this.marca + "</td>";
            fila += "<td>" + this.modelo + "</td>";
            fila += "<td>" + this.combustible + "</td>";
            fila += "<td>" + this.plazas + "</td></tr>";
        return fila;
    }

    compruebaMatricula() {
        /* Aqui comprobamos que no tenga la misma matricula que otro vehiculo ya introducido */
        // if()

        
    }
    
}

class Alquiler {
    _idAlquiler;
    _cliente;
    _vehiculos;
    _fechaInicio;
    _fechaFin;

    constructor (idAlquiler, cliente, vehiculos, fechaInicio = new Date, fechaFin = new Date) {
        this._idAlquiler = idAlquiler;
        cliente = [];
        vehiculos = [];
        fechaInicio = fechaInicio;
        fechaFin = fechaFin;
    }

    
    toHTMLRow() {
        let fila = "<tr>";
            fila += "<td>" + this.idAlquiler + "</td>";
            fila += "<td>" + this.cliente + "</td>";
            fila += "<td>" + this.vehiculos + "</td>"
            fila += "<td>" + this.fechaInicio + "</td>"
            fila += "<td>" + this.fechaFin + "</td></tr>";
        return fila;
    }




}

class Agencia {
    _clientes;
    _alquileres;
    _vehiculos;

    constructor (clientes, alquieres, vehiculos) {
        this._clientes = [];
        this._alquileres = [];
        this._vehiculos = [];
    }

    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }

    get alquileres() {
        return this._alquileres;
    }
    set alquileres(value) {
        this._alquileres = value;
    }

    get vehiculos() {
        return this._vehiculos;
    }
    set vehiculos(value) {
        this._vehiculos = value;
    }




    // Método para añadir un cliente al array de clientes
    altaCliente(cliente) {
        this._clientes.push(cliente);
    }

  // Método para añadir un alquiler al array de alquileres
    altaAlquiler(alquiler) {
        this._alquileres.push(alquiler);
    }

  // Método para añadir un vehículo al array de vehículos
    altaVehiculo(vehiculo) {
        this._vehiculos.push(vehiculo);
    }


    bajaVehiculo(idAlquiler) {
        /* Esto de aquí es muy probable que se haga con un delete */
    }

    listadoClientes() {
        /*Aqui hay que listar todos los clientes usando HTMLTable */
    }

    listadoAlquileres(fechaInicio, fechaFin) {
        /* Listar alquileres usando htmltable */
    }

    listadoAlquileresCliente(IDCliente) {

    }


    listadoCochesElectricos() {


    }
}


/*3. Se gestionarán los alquileres realizados por los diferentes clientes teniendo en
cuenta los siguientes supuestos:

a. Solo se permite alquilar vehículos que no estén alquilados previamente en
alguno de los días solicitados por el cliente. Si se intenta alquilar un vehículo
ya alquilado, se deberá mostrar un mensaje informando de tal circunstancia y
no se deberá formalizar dicho alquiler.

b. En cada alquiler se permitirá que el cliente añada tantos vehículos como
considere oportuno, siempre que estén disponibles para las fechas
escogidas.

c. No se permitirá formalizar alquileres cuyas fechas de inicio o fin sean
anteriores al día en curso.
 */


