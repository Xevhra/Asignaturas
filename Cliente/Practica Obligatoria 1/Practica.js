class Cliente {
    _dnicliente;
    _nombre;
    _apellidos;
    _usuario;


    get dnicliente() {
        return this._dnicliente;
    }
    set dnicliente(value) {
        this._dnicliente = value;
    }

    get nombre() {
        return this._nombre;
    }
    set dnicliente(value) {
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

    set usuario(value) {
        this._usuario = value;
    }



    


    toHTMLRow(){

    }

}


class Vehiculo {
    _matricula;
    _marca;
    _modelo;


    get matricula() {
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
        return this._modelo
    }

    set modelo(value) {
        this._modelo = value;
    }

    toHTMLRow() {

    }
}

class Moto extends Vehiculo {
    _ciclomotor;
    get ciclomotor() {
        return this._ciclomotor;
    }
    set ciclomotor(value) {
        this._ciclomotor = value;
    }
}

class Coche extends Vehiculo {
    _combustible;
    _plazas;

    get combustible() {
        return this._combustible;
    }

    set combustible(value) {
        this._combustible = value;
    }

    get plazas() {
        return this._plazas;
    }

    set plazas(value) {
        return this._plazas = value;
    }
}