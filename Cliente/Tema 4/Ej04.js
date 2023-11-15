class Figura {
    _color;

    constructor(color) {
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    imprimir() {
        console.log("Soy una figura de color: " + this.color);
    }
}

class Rectangulo extends Figura {
    _base;
    
    _altura;

    constructor(color, base, altura) {
        super(color);
        this._base = base;
        this._altura = altura;
      }

      get base() {
        return this._base;
    }
    set base(value) {
        this._base = value;
    }  

    get altura() {
        return this._altura;
    }
    set altura(value) {
        this._altura = value;
    }

    calcularArea() {
        let area = Number(this.base * this.altura);
        return area;
    }

    imprimir() {
        console.log("Soy un rectangulo de color: " + this.color + " de " + this.calcularArea() + " cm2");
    }

      

}


class Circulo extends Figura {
    _radio;
    
    constructor(color, radio) {
        super(color);
        this._radio = radio;
        
      }

      get radio() {
        return this._radio;
    }
    set radio(value) {
        this._radio = value;
    }  

    

    calcularArea() {
        let area = Number((this._radio * this._radio) * Math.PI);
        return area;
    }

    imprimir() {
        console.log("Soy un circulo de color: " + this.color + " de " + this.calcularArea() + " cm2 de area");
    }

      

}

let figura = new Figura("Azul")
let rectangulo = new Rectangulo("Rojo", 2, 2)
let circulo = new Circulo("Verde", 5, 5); 
let circulo2 = new Circulo("Rosa", 3, 3); 
rectangulo.imprimir();
figura.imprimir();
circulo.imprimir();
console.log(figura);
console.log(rectangulo);
console.log(circulo);