/* example 
 Only change code below this line
const increment = (number, value) => number + value;
 Only change code above this line

Exercise

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.*/

//solved
const increment = (number, value = 1) => number + value;
console.log(increment(5,2));
