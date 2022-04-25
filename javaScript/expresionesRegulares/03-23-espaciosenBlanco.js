/*

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Cambia esta línea
let result = sample.match(countWhiteSpace);


Cambia la expresión regular countWhiteSpace para buscar múltiples caracteres de espacio en blanco en una cadena.

Tu expresión regular debe usar una bandera global.

Tu expresión regular debe usar el carácter abreviado \s para que coincida con los caracteres de espacio en blanco.

Tu expresión regular debe encontrar ocho espacios en la cadena Men are from Mars and women are from Venus.

Tu expresión regular debe encontrar tres espacios en la cadena Space: the final frontier.

Tu expresión no debe encontrar espacios en la cadena MindYourPersonalSpace
*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Cambia esta línea
let result = sample.match(countWhiteSpace);