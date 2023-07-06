// FUNCION CONSTRUCTORA
// para declarar una clase Auto : Propiedades y metodos
// las propiedades de nuestra case Auto
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}

// Esta misma clase, escrita la SINTAXIS EXPRESION DE CLASE se hace asi:

class Auto {
    constructor(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}
    }

// ahora vamos a utilizar esa plantilla. En las 2 sintaxis se escribe igual
var miPrimerAuto = new Auto(4, "Blanco", "Fiat", 2022, 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.año);

// Como agregar metodos a una clase: con FUNCION CONSTRUCTORA:

this.informacion = function () {
    console.log("Este es un " + this.marca + " de color " + this.color);
};

// y se lo llama con
miPrimerAuto.informacion();

// Agregar metodos con la Expresion de Clase se hace asi:
informacion() {   // varia esta parte
    console.log("Este es un " + this.marca + " de color " + this.color); // esto queda igual
}