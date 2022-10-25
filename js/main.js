//alert()

let saldo = 5000


function salir() {
    alert("Fin del proceso")
}


function consultarSaldo() {
    alert("Su saldo es " + saldo)
    seleccionarOperacion()
}



function retirarDinero(monto) {
    if (monto > saldo) {
        alert("Fondos insuficientes")
    } else {
        saldo -= monto
    }
    seleccionarOperacion();
}


function seleccionarOperacion() {

    let op = prompt("ingresar operacion 1-Consultar saldo 2-Retirar dinero 3-Salir")
    switch (op) {
        case "1":
            consultarSaldo();
            op
            break
        case "2":
            let monto = prompt("Monto a retirar");
            retirarDinero(monto);
            break;
        case "3":
            salir();
            break
        default:
            alert("Operacion invalida");
    }
}




function validarClave(clave) {
    if (clave === "1235") {
        seleccionarOperacion()
    } else {
        alert("Clave incorrecta")
    }

}





function ingresarClave(tarjeta) {
    if (tarjeta) {
        let clave = prompt("ingresar clave")
        validarClave(clave)
    } else {
        alert("Es necesario una tarjeta")
    }
}


function entrarAlCajero() {
    let tarjeta = confirm("Ingrese tarjeta")
    ingresarClave(tarjeta)
}


entrarAlCajero()