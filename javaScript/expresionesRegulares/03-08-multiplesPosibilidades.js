/*

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Cambia esta línea
let result = vowelRegex; // Cambia esta línea

Usa una clase de caracteres con las vocales (a, e, i, o u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas.

Debes encontrar las 25 vocales.

Tu expresión regular vowelRegex debe usar una clase de caracteres.

Tu expresión regular vowelRegex debe utilizar la bandera global.

Tu expresión regular vowelRegex debe utilizar la bandera que no distingue entre mayúsculas y minúsculas.

Tu expresión regular no debe coincidir con ninguna consonante.

*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Cambia esta línea
let result = quoteSample.match(vowelRegex); // Cambia esta línea