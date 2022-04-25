/*

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Cambia esta línea
let result = alphabetRegex; // Cambia esta línea

Haz coincidir todas las letras en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas.

Tu expresión regular alphabetRegex debe coincidir con 35 elementos.

Tu expresión regular alphabetRegex debe utilizar la bandera global.

Tu expresión regular alphabetRegex debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Cambia esta línea
let result = quoteSample.match(alphabetRegex); // Cambia esta línea