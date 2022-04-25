/* 

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Cambia esta línea
let result = myRegex; // Cambia esta línea

Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. Recuerda incluir las banderas apropiadas en la expresión regular.

Tu expresión regular myRegex debe coincidir con 9 elementos.

Tu expresión regular myRegex debe utilizar la bandera global.

Tu expresión regular myRegex debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

*/

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea