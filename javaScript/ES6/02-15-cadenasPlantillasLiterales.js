/* 
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = [];
  // Cambia solo el código encima de esta línea

  return failureItems;
}

const failuresList = makeList(result.failure);

exercise 

sa la sintaxis de plantilla literal con comillas invertidas para crear un arreglo de cadenas de elemento lista (li). El texto de cada elemento de lista debe ser uno de los elementos del arreglo de la propiedad failure en el objeto result y tener un atributo class con el valor text-warning. La función makeList debe devolver el arreglo de cadenas de elemento lista.

Utiliza un método de iteración (cualquier tipo de bucle) para obtener el resultado deseado (mostrado a continuación).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

*/

//solved
// usar comilla invertida `` para poder que funcione.

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Cambia solo el código debajo de esta línea
    const failureItems = [];
    for(let i = 0;i < arr.length;i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Cambia solo el código encima de esta línea
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);