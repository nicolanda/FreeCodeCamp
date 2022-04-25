/*

let myString = "freeCodeCamp";
let fccRegex = /change/; // Cambia esta línea
let result = fccRegex.test(myString);

Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar su capitalización. Tu expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.

Tu expresión regular debe coincidir con la cadena freeCodeCamp

Tu expresión regular debe coincidir con la cadena FreeCodeCamp

Tu expresión regular debe coincidir con la cadena FreecodeCamp

Tu expresión regular debe coincidir con la cadena FreeCodecamp

Tu expresión regular no debe coincidir con la cadena Free Code Camp

Tu expresión regular debe coincidir con la cadena FreeCOdeCamp

Tu expresión regular no debe coincidir con la cadena FCC

Tu expresión regular debe coincidir con la cadena FrEeCoDeCamp

Tu expresión regular debe coincidir con la cadena FrEeCodECamp

Tu expresión regular debe coincidir con la cadena FReeCodeCAmp

*/

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Cambia esta línea
let result = fccRegex.test(myString);
