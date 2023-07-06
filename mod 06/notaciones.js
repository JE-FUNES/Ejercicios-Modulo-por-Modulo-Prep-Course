// DOT NOTATION
var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"]};

console.log(atuendos.manos);  // utilizamos un PUNTO para acceder a las propiedades

// BRACKET NOTATION

console.log(atuendos["pies"]); // utilizamos [] mas comillas para acceder a las propiedades

// creamos una nueva propiedad utilizando []

atuendos["cuello"] = ["Bufanda", "Pañuelo"];

console.log(atuendos["cuello"]);

// Uso de [] con variables externas como propiedad del OBJETO
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
 //   comidas.propUno = ["Frutas", "Vegetales"] // aqui usamos notacion por PUNTO, pero no funciona como variable de una funcion, 
  //  asi es que debemos cambiarla por notacion []
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Carnes", "Grasas"]; // aqui usamos notacion por [] pero ojo sin ""
};
diferenciaDeNotaciones("saludable", "no saludable");
console.log(comidas);