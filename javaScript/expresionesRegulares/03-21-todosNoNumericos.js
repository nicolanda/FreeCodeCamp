/*

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Cambia esta línea
let result = movieName.match(noNumRegex).length;

Usa la clase de caracteres abreviada \D para contar cuántos caracteres que no sean dígitos hay en los títulos de las películas.

Tu expresión regular debe usar el carácter de atajo que coincida con caracteres que no sean dígitos

Tu expresión regular debe usar la bandera global.

Tu expresión regular no debe encontrar caracteres que no sean dígitos en la cadena 9.

Tu expresión regular debe encontrar 6 caracteres que no sean dígitos en la cadena Catch 22.

Tu expresión regular debe encontrar 11 caracteres que no sean dígitos en la cadena 101 Dalmatians.

Tu expresión regular debe encontrar 15 caracteres que no sean dígitos en la cadena One, Two, Three.

Tu expresión regular debe encontrar 12 caracteres que no sean dígitos en la cadena 21 Jump Street.

Tu expresión regular debe encontrar 17 caracteres que no sean dígitos en la cadena 2001: A Space Odyssey.

*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; // Cambia esta línea
let result = movieName.match(noNumRegex).length;