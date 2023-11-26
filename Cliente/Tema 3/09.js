function procesarDatos() {
    let fechaUno = document.getElementById('fechaUno').value;
    let fechaDos = document.getElementById('fechaDos').value;

    const dUno = new Date(fechaUno);
    const dDos = new Date(fechaDos);

    const diaFechaUno = dUno.getDate();
    const diaFechaDos = dDos.getDate();

    const mesFechaUno = dUno.getMonth() + 1;
    const mesFechaDos = dDos.getMonth() + 1;

    const añoFechaUno = dUno.getFullYear();
    const añoFechaDos = dDos.getFullYear();

    if (añoFechaUno < añoFechaDos) {
        console.log('La primera fecha es mayor');
    } else if (añoFechaUno === añoFechaDos) {
        if (mesFechaUno < mesFechaDos) {
            console.log('La primera fecha es mayor');
        } else if (mesFechaUno === mesFechaDos) {
            if (diaFechaUno < diaFechaDos) {
                console.log('La primera fecha es mayor');
            } else if (diaFechaUno === diaFechaDos) {
                console.log('Las fechas son iguales');
            } else {
                console.log('La segunda fecha es mayor');
            }
        } else {
            console.log('La segunda fecha es mayor');
        }
    } else {
        console.log('La segunda fecha es mayor');
    }
}

/* Comentario 1*/
/* Comentario 2*/
/* Comentario 3 */
