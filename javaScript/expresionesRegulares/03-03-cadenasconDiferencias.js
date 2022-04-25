/*

let petString = "James has a pet cat.";
let petRegex = /change/; // Cambia esta línea
let result = petRegex.test(petString);

Completa la expresión regular petRegex para que coincida con las mascotas dog, cat, bird, o fish.

Tu expresión regular petRegex debe devolver true para la cadena John has a pet dog.

Tu expresión regular petRegex debe devolver false para la cadena Emma has a pet rock.

Tu expresión regular petRegex debe devolver true para la cadena Emma has a pet bird.

Tu expresión regular petRegex debe devolver true para la cadena Liz has a pet cat.

Tu expresión regular petRegex debe devolver false para la cadena Kara has a pet dolphin.

Tu expresión regular petRegex debe devolver true para la cadena Alice has a pet fish.

Tu expresión regular petRegex debe devolver false para la cadena Jimmy has a pet computer.

*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result = petRegex.test(petString);