// hasOwnProperty

var libro = { autor: "Borges", genero: "Policial", año: 1990};
var tienePropiedad = libro.hasOwnProperty("autor");
// console.log(tienePropiedad);

// keys devuelve un ARRAY listando todas las propiedades.
var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

// FOR IN

var mundo = { continentes: 7, paises: 195, oceanos: 5};
// for (){} esto indica que trabajaremos con un bucle
// for (variable + palabra reservada in + objeto que queremos recorrer)
for (var prop in mundo){
    console.log("Esta es la propiedad: " + prop);
    console.log("Este ese el valor: " + mundo[prop]); // aqui con [] pudimos acceder al valor de la propiedad
}