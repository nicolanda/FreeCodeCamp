/*

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Cambia esta línea
let result = twinkleStar; // Cambia esta línea

Nota
En tu expresión regular puedes utilizar múltiples banderas, como /search/gi

La expresión regular starRegex debe utilizar la bandera global g

Tu expresión regular starRegex debe utilizar la bandera que no distingue entre mayúsculas y minúsculas i

Tu coincidencia (match) debe coincidir con ambas apariciones de la palabra Twinkle

Tu coincidencia result debe tener dos elementos en él.

*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Cambia esta línea
let result = twinkleStar.match(starRegex); // Cambia esta línea