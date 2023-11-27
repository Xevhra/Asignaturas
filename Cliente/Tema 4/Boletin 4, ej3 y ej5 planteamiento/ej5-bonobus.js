class Bonobus {
    constructor() {}
    picarViaje(linea, dia, mes, anyo, hora, minuto) {}
}

class BonobusDiezViajes extends Bonobus {
    _viajes;
    constructor() {
        super();
        this._viajes = 10;
    }
    get viajes() {
        return this._viajes;
    }
    set viajes(value) {
        this._viajes = value;
    }
    picarViaje() {
        if (viajes > 0) {
            this.viajes--;
            return true;
        } else return false;
    }
}

class BonoDiezViajesConTrasbordo extends BonobusDiezViajes {
    _linea;
    _dia;
    _mes;
    _anyo;
    _hora;
    _minutos;
    constructor() {
        super(viajes);
    }
    get linea() {
        return this._linea;
    }
    set linea(value) {
        this._linea = value;
    }
    get dia() {
        return this._dia;
    }
    set dia(value) {
        this._dia = value;
    }
    get mes() {
        return this._mes;
    }
    set mes(value) {
        this._mes = value;
    }
    get anyo() {
        return this._anyo;
    }
    set anyo(value) {
        this._anyo = value;
    }
    get hora() {
        return this._hora;
    }
    set hora(value) {
        this._hora = value;
    }
    get minutos() {
        return this._minutos;
    }
    set minutos(value) {
        this._minutos = value;
    }
    picarViaje(nuevaLinea) {
        const fecha = new Date();

        if (this.viajes == 10) {
            super.picarViaje();
        } else if (nuevaLinea == this.linea) {
            super.picarViaje();
        } else {
        }

        this.dia = fecha.getDate();
        this.mes = fecha.getMonth();
        this.anyo = fecha.getFullYear();
        this.hora = fecha.getHours();
        this.minutos = fecha.getMinutes();
        this.linea = nuevaLinea;
    }
}

class BonoTarifaPlana extends Bonobus {}

class BonoTarifaPlanaUnDia extends BonoTarifaPlana {}

class BonoTarifaPlanaTresDias extends BonoTarifaPlana {}

class BonoTarifaPlanaUnMes extends BonoTarifaPlana {}

class BonoTarifaPlanaUnAnyo extends BonoTarifaPlana {}
