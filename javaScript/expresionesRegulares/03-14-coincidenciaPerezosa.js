/*

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Cambia esta línea
let result = text.match(myRegex);

Corrige la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is coming</h1>". Recuerda que el comodín . en una expresión regular coincide con cualquier carácter.

La variable result debe ser un arreglo con <h1> en él

myRegex debe usar una coincidencia perezosa

myRegex no debe incluir la cadena h1

*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Cambia esta línea
let result = text.match(myRegex);