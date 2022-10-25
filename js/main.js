//alert()

let saldo = 5000


function salir(){
    alert("Fin del proceso")
}

function consultarSaldo(){
    alert("Su saldo es " + saldo)
    seleccionarOperacion()
}



function retirarDinero(monto){
    if(monto > saldo){
        alert("Fondos insuficientes")
    } else{
        saldo -= monto
    }
    seleccionarOperacion();
}


function seleccionarOperacion() {
    console.log("------------")
    console.log("1 - Consultar saldo")
    console.log("2 - Retirar dinero")
    console.log("3 - Salir")
    let op = prompt("ingresar operacion")
    switch (op) {
        case "1":
            consultarSaldo()
            break
        case "2":
            let monto = number(prompt("Monto a retirar"))
            retirarDinero("monto")
            break;
        case "3":
            salir()
            break
            default:
                console.log("Operacion invalida")
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