/* example
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Cambia solo el código debajo de esta línea
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Cambia solo el código encima de esta línea

Utiliza la sintaxis de desestructuración dentro del argumento de la función half para enviar solo max y min dentro de la función.*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Cambia solo el código debajo de esta línea
  const half = ({max , min}) => (max + min)/2.0
  // Cambia solo el código encima de esta línea

  console.log(half(stats))