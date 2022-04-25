/*

let ohStr = "Ohhh no";
let ohRegex = /change/; // Cambia esta línea
let result = ohRegex.test(ohStr);

Modifica la expresión regular ohRegex para que coincida con toda la frase Oh no solo cuando tenga de 3 a 6 letras h.

La expresión regular debe utilizar llaves.

La expresión regular no debe coincidir con la cadena Ohh no

La expresión regular debe coincidir con la cadena Ohhh no

La expresión regular no debe coincidir con la cadena Ohhhh no

La expresión regular debe coincidir con la cadena Ohhhhh no

La expresión regular debe coincidir con la cadena Ohhhhhh no

*/

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\s+no/gi; // Cambia esta línea
let result = ohRegex.test(ohStr);
