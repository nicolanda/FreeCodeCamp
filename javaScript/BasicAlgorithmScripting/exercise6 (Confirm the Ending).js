/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.


*/

function confirmEnding(str, target) {
    console.log(str.length);
    console.log(target.length);
    str = str.slice(str.length - target.length) === target;
    return str;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on") );