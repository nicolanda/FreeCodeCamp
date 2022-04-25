/* exercise 
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de recibir cualquier número de argumentos y devolver su suma.

*/

const sum = (...args) => {
    return args.reduce((a,b) => a+b,0);
    }
  console.log(sum(1,2,3,4))