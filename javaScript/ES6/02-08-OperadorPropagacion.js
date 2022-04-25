/* exercise

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Cambia esta línea

console.log(arr2);

Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación.

*/
//solved
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);