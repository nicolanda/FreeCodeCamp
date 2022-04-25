/*
Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

convertToF(0) should return a number

convertToF(-30) should return a value of -22

convertToF(-10) should return a value of 14

convertToF(0) should return a value of 32

convertToF(20) should return a value of 68

convertToF(30) should return a value of 86

formula

F = (C * 9/5) + 32
*/

function convertToF(celsius){
    return (celsius * 9/5)  + 32
}

console.log(typeof(convertToF()));
console.log(convertToF(-30))
console.log(convertToF(-10))
console.log(convertToF(0))
console.log(convertToF(20))
console.log(convertToF(30))
