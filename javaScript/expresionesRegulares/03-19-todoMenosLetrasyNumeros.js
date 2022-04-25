/*

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;

Usa la clase de caracteres abreviados \W para contar el número de caracteres no alfanuméricos en varias comillas y cadenas.

Tu expresión regular debe usar la bandera global.

Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena The five boxing wizards jump quickly..

Tu expresión regular debe utilizar el carácter abreviado para coincidir con los caracteres no alfanuméricos.

Tu expresión regular debe encontrar 8 caracteres no alfanuméricos en la cadena Pack my box with five dozen liquor jugs.

Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en la cadena How vexingly quick daft zebras jump!

Tu expresión regular debe encontrar 12 caracteres no alfanuméricos en la cadena 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;