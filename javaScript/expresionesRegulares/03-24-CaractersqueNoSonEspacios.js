/*

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);

Cambia la expresión regular countNonWhiteSpace para buscar varios caracteres que no sean espacios en blanco en una cadena.

Tu expresión regular debe usar la bandera global.

Tu expresión regular debe usar el carácter abreviado \S para que coincida con todos los caracteres que no sean espacios en blanco.

Tu expresión regular debe encontrar 35 caracteres que no sean espacios en la cadena Men are from Mars and women are from Venus.

Tu expresión regular debe encontrar 23 caracteres que no sean espacios en la cadena Space: the final frontier.

Tu expresión regular debe encontrar 21 caracteres que no sean espacios en la cadena MindYourPersonalSpace

*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);