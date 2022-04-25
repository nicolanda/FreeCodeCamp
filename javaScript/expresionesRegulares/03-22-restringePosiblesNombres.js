/*

let username = "JackOfAllTrades";
let userCheck = /change/; // Cambia esta línea
let result = userCheck.test(username);

Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente.
Tu expresión regular debe coincidir con la cadena JACK

Tu expresión regular no debe coincidir con la cadena J

Tu expresión regular debe coincidir con la cadena Jo

Tu expresión regular debe coincidir con la cadena Oceans11

Tu expresión regular debe coincidir con la cadena RegexGuru

Tu expresión regular no debe coincidir con la cadena 007

Tu expresión regular no debe coincidir con la cadena 9

Tu expresión regular no debe coincidir con la cadena A1

Tu expresión regular no debe coincidir con la cadena BadUs3rnam3

Tu expresión regular debe coincidir con la cadena Z97

Tu expresión regular no debe coincidir con la cadena c57bT3

Tu expresión regular debe coincidir con la cadena AB1

Tu expresión regular no debe coincidir con la cadena J%4
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result = userCheck.test(username);
