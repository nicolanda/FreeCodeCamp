/*

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Cambia esta línea
let result = lastRegex.test(caboose);

Usa el carácter de ancla ($) para coincidir la cadena caboose al final de la cadena caboose.

Debes buscar caboose con el ancla de signo de dólar $ en tu expresión regular.

Tu expresión regular no debe usar ninguna bandera.

Debes coincidir caboose al final de la cadena The last car on a train is the caboose

*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Cambia esta línea
let result = lastRegex.test(caboose);