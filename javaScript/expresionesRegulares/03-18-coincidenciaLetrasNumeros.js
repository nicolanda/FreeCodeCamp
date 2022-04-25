/*

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;

Utiliza la clase de caracteres abreviada \w para contar el número de caracteres alfanuméricos en varias citas y cadenas.

Tu expresión regular debe usar la bandera global.

Tu expresión regular debe usar el carácter abreviado \w para coincidir con todos los caracteres alfanuméricos.

Tu expresión regular debe encontrar 31 caracteres alfanuméricos en la cadena The five boxing wizards jump quickly.

Tu expresión regular debe encontrar 32 caracteres alfanuméricos en la cadena Pack my box with five dozen liquor jugs.

*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;