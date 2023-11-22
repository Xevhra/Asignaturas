/*Implemente la clase Semaforo con un atributo llamado color y otro
de tipo booleano llamado parpadeando.
El valor del atributo color será 0 cuando el semáforo esté en rojo, 1 cuando
esté en ámbar, y 2 cuando esté en verde.
El constructor sin parámetros inicializará todos los objetos como semáforos en rojo (color=0)
y sin parpadear (parpadeando=false).
Incluya los métodos consultores y modificadores estándar para los dos atributos.

El código de los métodos modificadores debe asegurar que el atributo color no toma
valores no permitidos, y que sólo se puede activar el parpadeo del semáforo cuando el color es ámbar. 
*/
class Semaforo {
    _color;
    _parpadeando;
    constructor() {
        this._color = 0;
        this._parpadeando = false;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        switch (value) {
            case 1:
            case 2:
            case 0:
                this._color = value;
                break;
        }
    }
    get parpadeando() {
        return this._parpadeando;
    }
    set parpadeando(
        value //value es true o false
    ) {
        if (value == false) {
            this._parpadeando = false;
        } else if (this._color == 1) {
            this._parpadeando = true;
        }
    }
    /*
    Añada un método cadenaColor, que no recibe argumentos y devuelve una cadena de caracteres indicando
    el color actual de semáforo (“ROJO”, “ÁMBAR”, “VERDE”).
    */
    cadenaColor() {
        switch (this.color) {
            case 0:
                return "ROJO";
            case 1:
                return "ÁMBAR";
            case 2:
                return "VERDE";
        }
    }
    /*
    Añada un método llamado imprimir, que no recibe ningún argumento ni devuelve ningún valor.
    Este método imprimirá por pantalla el estado del semáforo usando mensajes del tipo: “Semáforo en ROJO”,
    “Semáforo en AMBAR parpadeando”, “Semáforo en AMBAR”.
    */
    imprimir() {
        if (this.parpadeando)
            console.log("Semáforo en " + this.cadenaColor() + " parpadeando");
        else console.log("Semáforo en " + this.cadenaColor());
    }
    /*
    Añada un método llamado cambia, que cada vez que es llamado hará cambiar al semáforo
    del estado en que se encuentre al siguiente estado según el diagrama.
    */
    cambia() {
        switch (this.color) {
            case 0: //está rojo
                this.color = 2; //el 2 es verde
                break;
            case 2: //está verde
                this.color = 1; //el 1 es ámbar
                this.parpadeando = true;
                break;
            case 1: //está ámbar
                if (this.parpadeando) {
                    //si está parpadeando, deja de parpadear
                    this.parpadeando = false;
                } else {
                    this.color = 0; //si ya no estaba parpadeando, pasa a rojo
                }
                break;
        }
    }
}

/* PRUEBAS:
sem1 = new Semaforo();
console.log(sem1.color + " - " + sem1.parpadeando);
sem1.parpadeando = true;
console.log(sem1.color + " - " + sem1.parpadeando);
sem1.color = 1;
sem1.parpadeando = true;
console.log(sem1.color + " - " + sem1.parpadeando);
console.log(sem1);
console.log(sem1.cadenaColor());
sem1.color = 0;
console.log(sem1.cadenaColor());
sem1.color = 2;
console.log(sem1.cadenaColor());
sem1.parpadeando = false;
console.log(sem1);
sem1.imprimir();
sem1.color = 1;
sem1.parpadeando = true;
sem1.imprimir();
sem1.cambia();
sem1.imprimir();
sem1.cambia();
sem1.imprimir();
sem1.cambia();
sem1.imprimir();
sem1.cambia();
sem1.imprimir();
sem1.cambia();
sem1.imprimir();
*/

/*
○ Cree un Semáforo.
○ Cambie el color a un color incorrecto.
○ Cambie el color a verde (2).
○ Ponga el atributo parpadeando a cierto.
○ Cambie el color a ámbar (3).
○ Ponga el atributo parpadeando a cierto.
○ Llame 5 veces al método cambio (use un bucle)
○ Cree un nuevo semáforo y asigne los valores de los atributos del primer
semáforo al nuevo.
*/

sem = new Semaforo(); //Cree un Semáforo
sem.imprimir();
sem.color = 3; //Cambie el color a un color incorrecto.
sem.imprimir();
sem.color = "z"; //Cambie el color a un color incorrecto.
sem.imprimir();
sem.color = 2; //Cambie el color a verde (2).
sem.imprimir();
sem.parpadeando = true; //Ponga el atributo parpadeando a cierto.
sem.imprimir();
sem.color = 1; //Cambie el color a ámbar (3).
sem.imprimir();
sem.parpadeando = true; //Ponga el atributo parpadeando a cierto.
sem.imprimir();
//Llame 5 veces al método cambio (use un bucle)
for (let i = 0; i < 5; i++) {
    sem.cambia();
    sem.imprimir();
}

semNuevo = new Semaforo();
semNuevo.color = sem.color;
semNuevo.parpadeando = sem.parpadeando;
semNuevo.imprimir();
console.log(sem);
console.log(semNuevo);
