/*

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Cambia esta línea
let result = calRegex.test(rickyAndCal);

Usa el carácter caret en una expresión para buscar Cal solo al principio de la cadena rickyAndCal.

Tu expresión regular debe buscar la cadena Cal con una letra mayúscula.

Tu expresión regular no debería usar ninguna etiqueta.

Tu expresión regular debe coincidir con la cadena Cal en el inicio de la cadena.

Tu expresión regular debe coincidir con la cadena Cal en medio de la cadena.

*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea
let result = calRegex.test(rickyAndCal);
