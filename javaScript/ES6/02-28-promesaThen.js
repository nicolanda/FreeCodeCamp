/* const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

Añade el método then a tu promesa. Usa result como parámetro de tu función callback, asimismo imprime result en la consola.

Debes llamar al método then en la promesa.

El método then, debe tener una función callback con result como parámetro.

Debes imprimir result en la consola.

*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
    let responseFromServer = true;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  
    makeServerRequest.then(result =>{
      console.log(result)
    });
  });