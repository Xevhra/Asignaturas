class Producto {
_nombre;
_unidades;
_precio;

    constructor (nombre, unidades, precio) {
        this._nombre = nombre;
        this._unidades = Number(unidades);
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        this._unidades = value;
    }

    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }

valorEnStock() {
        importe = unidades * precio;
        console.log(importe);
        return importe;
    }

    

    incrementarStock(suma) {
        incremento = suma + this.unidades;
        console.log(incremento);
        return incremento;
    }

    incrementarStock(resta) {
        detrimento = resta + this.unidades;
        console.log(incremento);
        return detrimento;
    }
}

const p = new Producto ("Pieroproducto", 10, 10);
console.log(p);
suma = Number(prompt('Introduzca la suma'));
resta = Number(prompt('Introduzca la resta'));