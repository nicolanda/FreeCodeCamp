/*

const createPerson = (name, age, gender) => {
  // Cambia solo el código debajo de esta línea
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Cambia solo el código encima de esta línea
};
Utiliza la abreviatura de propiedad de objeto con objetos literales para crear y devolver un objeto con las propiedades name, age y gender.

*/

const createPerson = (name, age, gender) => {
    return{
        name,
        age,
        gender
    };
};

console.log(createPerson("zodica", 56, "male"));
