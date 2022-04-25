/*

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Cambia esta línea
let result = difficultSpelling.match(myRegex);

Quieres encontrar coincidencias cuando la letra s ocurre una o más veces en Mississippi. Escribe una expresión regular que utilice el signo +

Tu expresión regular myRegex debe utilizar el signo + para coincidir con uno o más caracteres de s.

Tu expresión regular myRegex debe coincidir con 2 elementos.

La variable result debe ser un arreglo con dos coincidencias de ss

*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Cambia esta línea
let result = difficultSpelling.match(myRegex);