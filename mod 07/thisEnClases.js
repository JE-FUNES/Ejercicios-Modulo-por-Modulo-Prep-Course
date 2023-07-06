class Football{
    constructor(jugador) {
        this.jugador = jugador;
    }
    obtenerNombre() {console.log(this.jugador);
    }
}

var argentina = new Football("Messi");
var brasil = new Football("Pele");

argentina.obtenerNombre();
brasil.obtenerNombre();

//accedemos a la misma propiedad, pero el contexto es diferente