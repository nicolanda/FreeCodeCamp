/*

let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Cambia esta línea
let result = movieName.match(numRegex).length;

Usa la clase de caracteres abreviada \d para contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.

Tu expresión regular debe usar el carácter de atajo que coincida con caracteres de dígitos

Tu expresión regular debe usar la bandera global.

Tu expresión regular debe encontrar 1 dígito en la cadena 9.

Tu expresión regular debe encontrar 2 dígitos en la cadena Catch 22.

Tu expresión regular debe encontrar 3 dígitos en la cadena 101 Dalmatians.

Tu expresión regular no debe encontrar dígitos en la cadena One, Two, Three.

Tu expresión regular debe encontrar 2 dígitos en la cadena 21 Jump Street.

Tu expresión regular debe encontrar 4 dígitos en la cadena 2001: A Space Odyssey.

*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Cambia esta línea
let result = movieName.match(numRegex).length;