




class Bonobus {

    
    picarViaje(linea, dia, mes, año, hora, minutos) {

    }

}

class BonoDiezViajes extends Bonobus {
    _totalViajes;
    _dia;
    _mes;
    _año;
    _linea;
    _hora;
    _minutos;


    constructor(dia, mes, año, linea, hora, minutos, totalViajes) {
        this._dia = dia;
        this._mes= mes;
        this._año= año;
        this._linea = linea;
        this._hora = hora;
        this._minutos = minutos;
        this._totalViajes = totalViajes;
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

    get año() {
        return this._año;
    }
    set año(value) {
        this._año = value;
    }

    get linea() {
        return this._linea;
    }
    set linea(value) {
        this._linea = value;
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
    

    get totalViajes() {
        return this._totalViajes;
    }
    set totalViajes(value) {
        this._totalViajes = value;
    }

    


    picarViaje(linea, dia, mes, año, hora, minutos) {
        if (totalViajes <= 10) {
            return true;
        } else {
            return false;
        }
    }

    

}

class BonoDiezViajesConTransbordo extends BonoDiezViajes {
    picarViaje(linea, dia, mes, año, hora, minutos) {

    }

}

class BonoTarifaPlana extends Bonobus {

    picarViaje(linea, dia, mes, año, hora, minutos) {
        if (/*Añadir comprobador mes, es decir, el mes no se ha completado*/) {
            return true;
        } else {
            return false;
        }
    }

}