let descuentoEstudiante = 0.2;
let descuentoTrainee = 0.5;
let descuentoJunior = 0.85;


const valorEntrada = 200;

// tomo los valores del dom

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const botonCalcular = document.querySelector('#botonCalcular');
const botonReset = document.querySelector('#botonReset');

function totalPagar() {
    let totalValor = parseInt(cantidad.value) * valorEntrada;

    // condicion descuento

    if (categoria.value == 1) {
        totalValor = totalValor * descuentoEstudiante
    }
    else if (categoria.value == 2) {
        totalValor = totalValor * descuentoTrainee
    }
    else if (categoria.value == 3) {
        totalValor = totalValor * descuentoJunior;
    }
// El error que tenia era porque no ponia lo siguiente adentro de la función
    parrafoTotal.innerHTML = "Total a pagar: $" + totalValor;

}

botonCalcular.addEventListener('click', totalPagar);

botonReset.addEventListener('click', () => {
    parrafoTotal.innerHTML = "Total a pagar :"
    cantidad.value = null;
})

// Ojo de poner el parentesiis final para cerrar la funcion flecha