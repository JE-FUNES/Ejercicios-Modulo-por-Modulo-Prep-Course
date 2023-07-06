// El OBJETO This hace referencia al "contexto" haciendo saber a la funcion que esa es una propiedad de un objeto

var mascota = {
    animal: "Perro",
    raza: "Ovejero",
    amistoso: true,
    dueño: "Julia",
    info: function () {   // esta propiedad es una funcion
        console.log("Mi perro es un " + this.raza);
    },
};

mascota.info();

