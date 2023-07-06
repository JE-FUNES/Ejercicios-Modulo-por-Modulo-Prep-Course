function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    let limite = 0;
 do {
     num = num + 5;
     limite = limite + 1;
 } while (limite < 8);
 return num;
 }
 console.log(doWhile(5));