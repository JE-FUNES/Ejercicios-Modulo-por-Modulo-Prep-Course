var deportes = {
    conBalon: ["Football", "Basketball", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "Treking"],
};


 var persona = {                    //nombre del objeto
    nombre: "Lucas",               //propiedad 1
    edad: 26,                      //propiedad 2
    estudios: {                    //propiedad 3
        esProgramador: true
    }

console.log(persona.edad);        // (objeto.propiedad) De esta forma obtenemos valores de un OBJETO

// Para CAMBIAR valores a un OBJETO

persona.edad = 32;                   // objeti.propiedad = "nuevo valor";


// para CREAR un OBJETO: necesitamos saber el NOMBRE y su VALOR (nunca puede haber una propiedad vacia})

var autos = {};                                       // var
    autos.marcas = ["Ford", "Audi", "Ferrari"];       // clave : valor


    // para BORRAR propiedades : DELETE

    delete autos.marcas;

// dentro de una propiedad de un OBJETO podemos guardar una FUNCION

var misFunciones = { 
    saludar : function () {
        console.log("Hola");
    },
};

misFunciones.saludar();
