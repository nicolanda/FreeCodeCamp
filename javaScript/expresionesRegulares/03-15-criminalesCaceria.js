/*

let reCriminals = /./; // Cambia esta línea

Escribe una expresión regular codiciosa que encuentre uno o más criminales dentro de un grupo de personas. Un criminal está representado por la letra mayúscula C.

Tu expresión regular debe coincidir con un criminal (C) en la cadena C

Tu expresión regular debe coincidir con dos criminales (CC) en la cadena CC

Tu expresión regular debe coincidir con tres criminales (CCC) en la cadena P1P5P4CCCcP2P6P3.

Tu expresión regular debe coincidir con cinco criminales (CCCCC) en la cadena P6P2P7P4P5CCCCCP3P1

Tu expresión regular no debe coincidir con ningún criminal en la cadena vacía ""

Tu regex no debe coincidir con ningún criminal en la cadena P1P2P3

Tu expresión regular debe coincidir con cincuenta criminales (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) en la cadena P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.

*/

//Solución
let reCriminals = /C+/; // Cambia esta línea
