/* Confeccionar una función que reciba dos números y 
muestre en la página los valores comprendidos entre ellos de uno en uno. 
Cargar por teclado esos dos valores. */

let numero1 = prompt('Introduzca un numero');
let numero2 = prompt('Introduzca un numero');

function buscaNumero(a, b) {
    if (a !== b) {
        let resultado = '';
        for (let i = a; i <= b; i++) {
            resultado += i + ' ';
        }
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        alert('Los números son iguales. No hay números para mostrar.');
        document.getElementById("resultado").innerHTML = 'Los números son iguales. No hay números para mostrar.';
    }
}

buscaNumero(parseInt(numero1), parseInt(numero2));


