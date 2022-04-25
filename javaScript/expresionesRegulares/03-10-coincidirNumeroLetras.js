/*

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Cambia esta línea
let result = myRegex; // Cambia esta línea

Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de números entre 2 y 6. Recuerda incluir las banderas apropiadas en la expresión regular.

Tu expresión regular myRegex debe coincidir con 17 elementos.

Tu expresión regular myRegex debe utilizar la bandera global.

Tu expresión regular myRegex debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6-h-s]/ig; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea