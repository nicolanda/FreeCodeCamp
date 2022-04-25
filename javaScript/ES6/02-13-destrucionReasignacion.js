/* exercise

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea
  const arr = list; // Cambia esta línea
  // Cambia solo el código encima de esta línea
  return arr;
}
const arr = removeFirstTwo(source);

Utiliza la sintaxis de desestructuración con el parámetro rest para realizar un Array.prototype.slice() eficaz, de tal manera que arr sea un sub-arreglo del arreglo original source con los dos primeros elementos omitidos.

*/

//solved

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [a, b, ...arr] = list; 
  
  return arr;
}
const arr = removeFirstTwo(source);