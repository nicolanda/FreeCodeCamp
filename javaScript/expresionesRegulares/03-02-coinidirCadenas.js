/*

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Cambia esta línea
let result = waldoRegex.test(waldoIsHiding);

Completa la expresión regular waldoRegex para encontrar "Waldo" en la cadena waldoIsHiding con una coincidencia literal.

Tu expresión regular waldoRegex debe encontrar la cadena Waldo

Tu expresión regular waldoRegex no debe buscar ninguna otra cosa.

Debes realizar una coincidencia de cadena literal con tu expresión regular.

*/

//solución.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Cambia esta línea
let result = waldoRegex.test(waldoIsHiding);