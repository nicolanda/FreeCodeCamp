/*

let timStr = "Timmmmber";
let timRegex = /change/; // Cambia esta línea
let result = timRegex.test(timStr);

Modifica la expresión regular timRegex para hacer coincidir con la palabra Timber solo cuando esta tiene cuatro letras m.

La expresión regular debe utilizar corchetes.

La expresión regular no debe coincidir con la cadena Timber

La expresión regular no debe coincidir con la cadena Timmber

La expresión regular no debe coincidir con la cadena Timmmber

La expresión regular debe coincidir con la cadena Timmmmber

La expresión regular no debe coincidir con la cadena Timber con 30 m.

*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Cambia esta línea
let result = timRegex.test(timStr);