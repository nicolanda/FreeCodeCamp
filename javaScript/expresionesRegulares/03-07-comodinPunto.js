/*

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Cambia esta línea
let result = unRegex.test(exampleStr);

Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el carácter de comodín.

Debes usar el método .test().

Debes usar el carácter de comodín en tu expresión regular unRegex

Tu expresión regular unRegex debe coincidir con run en la cadena Let us go on a run.

Tu expresión regular unRegex debe coincidir con sun en la cadena The sun is out today.

Tu expresión regular unRegex debe coincidir con fun en la cadena Coding is a lot of fun.

Tu expresión regular unRegex debe coincidir con pun en la cadena Seven days without a pun makes one weak.

Tu expresión regular unRegex debe coincidir con nun en la cadena One takes a vow to be a nun.

Tu expresión regular unRegex debe coincidir con bun en la cadena She got fired from the hot dog stand for putting her hair in a bun.

Tu expresión regular unRegex no debe coincidir con la cadena There is a bug in my code.

Tu expresión regular unRegex no debe coincidir con la cadena Catch me if you can.

*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Cambia esta línea
let result = unRegex.test(exampleStr);