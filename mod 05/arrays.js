// Como listar un array
var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";
console.log(listaDeCompras);

//Como ver que elemento hay en determinado indice
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

//Para saber la "longitud" o extensión del array, es decir, cuántos elementos tiene, se utiliza .length
console.log(listaDeCompras.length)

//ejercicio
var nombres = ["Matias", "Maria", "Diego", "Rosa"].length;
console.log(nombres);

//como agregar elementos de forma rapida al final .push
var colores = ["amarillo", "azul"];
colores.push("rojo");
console.log(colores);

// para agregar un elemento al principio .unshift
colores.unshift("verde");
console.log(colores);

// para eliminar el último elemento .pop
colores.pop();
console.log(colores);

// para eliminar el primer elemento .shift
colores.shift();
console.log(colores);

//para saber si un array incluye un elemento .includes
var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);

// otro ejemplo para resultado false con .includes
var incluyeMonet = pintores.includes("Monet");
console.log(incluyeMonet);

//para saber si todos los elementos del array cumplen con una condicion .every (ej si son > 5)
var numeros = [10, 6, 8, 9];
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumpleCondicion);

// metodo split (separar) Lo que esta entre parentesis determina el metodo de separacion. aqui por ejemplo las "" determinan que separe letra x letra
var palabra = "Henri";
var palabraSeparada = palabra.split("");
console.log(palabraSeparada);

//si quisiera separar la palabra por ejemplo cada vez que encuentra una letra a...
var palabra = "Antojada";
var palabraSeparadaEnA = palabra.split("a");
console.log(palabraSeparadaEnA);

//En el ejemplo de Henri, separamos letra por letra, y terminamos teniendo un undice [ 'H', 'e', 'n', 'r', 'i' ]
// asi podemos insertar o quitar con los metodos aprendidos .unshift .shift .push .pop y se la vuelve a unir
//con el metodo .join
var palabra = "Henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada.join(""));
// esto ultimo tambien puede hacerse asi
var palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);

// metodo .forEach (aqui lista todo tal cual es decir vemos elemento por elemento)
var numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num));
//si solo quisieramos que haga console.log con aquellos que sean iguales a 3
numeros.forEach((num) => {if (num === 3) {console.log(num)}});

//si en cambio quisieramos hacerle un cambio utilizamos .map
//por ejemplo, queremos sumarle +1
var masUno = numeros.map(num => {return num + 1})
console.log(masUno);

// Bucles arrays
// for
// ejemplo
var arr = [1, 2, 3, 4, 5];
// En for entre parentesis siempre hay 3 datos: 
// primero: una variable var, por ejemplo for (var i = 0;... 
// segundo: una sentencia de cierre (periodo de ejecucion del bucle i); 
// por ejemplo i < ... arr.lenght; ...
// tercero: que pasará cuando la variable finalice
// por ej. ... i++) (aumenta 1)
for (var i = 0; i < arr.length; i++) {
// además, ueremos hacer una accion en cada elemento y para ello debemos ponerle un nombre a cada array + {}
    console.log(arr[i]);
}

// for en una funcion con atring...
function encontrarLetraP(string) {
    var letras = string.split("");
// recordemos que .split separa, asi transformamos un string en un array
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === "p") {
        console.log("Si contiene P");
// aqui le estamos pidiendo que analice el string ya separado en letras, y que cuando encuentre la letra P devuelva un texto, 
        }
    }
}
encontrarLetraP("paralelogramo");

// bucle while
// entre parentesis se pone la condicion que se debe cumplir
// supongamos que queremos que se agregue la palabra BOOM un maximo de 5 veces.
var arr = [];
// creamos un array vacio
while(arr.length < 5) {
    //ponemos la condicion con while y
    arr.push("BOOM");
    //agregamos al final con .push la palabra BOOM
}
console.log(arr);

// ejercicio de prueba

    var array = [1, "Henry", 2];
    var enteros = [];
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === number) {
            enteros.push(array[i])
        }
    } 
    console.log enteros;

