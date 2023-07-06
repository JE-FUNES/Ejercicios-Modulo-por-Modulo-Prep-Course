/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
    if (x > y) {
       console.log(x);
    } else if (y > x) {
       console.log(y);
    } else {
       console.log(x || y);
    }
 }
 obtenerMayor(9, 9);