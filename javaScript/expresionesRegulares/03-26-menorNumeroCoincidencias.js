/*

let haStr = "Hazzzzah";
let haRegex = /change/; // Cambia esta línea
let result = haRegex.test(haStr);

Modifica la expresión regular haRegex para coincidir con la palabra Hazzah solo cuando ésta tiene cuatro o más letras z.

La expresión regular debe utilizar llaves.

La expresión regular no debe coincidir con la cadena Hazzah

La expresión regular no debe coincidir con la cadena Hazzzah

La expresión regular debe coincidir con la cadena Hazzzzah

La expresión regular debe coincidir con la cadena Hazzzzzah

La expresión regular debe coincidir con la cadena Hazzzzzzah

La expresión regular debe coincidir con la cadena Hazzah con 30 z's.

*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result = haRegex.test(haStr);