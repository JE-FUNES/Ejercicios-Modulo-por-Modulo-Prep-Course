function viajar(destino) {
    if (destino === "Brasil") {
        console.log("gire a la IZQUIERDA");
        } else if (destino === "Argentina") {
            console.log("Gire a la DERECHA ");
        } else {
            console.log("Nos Perdimos");
        }
}

viajar("Brasil")

function edadParaManejar(edad) {
    if(edad >=18) {
        console.log(true);
    } else {
        console.log(false);
    }

}

edadParaManejar(20)