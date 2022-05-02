/*

Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

Your code should use the some method.

checkPositive([1, 2, 3, -4, 5]) should return true.

checkPositive([1, 2, 3, 4, 5]) should return true.

checkPositive([-1, -2, -3, -4, -5]) should return false.

*/

function checkPositive(arr) {
  // Only change code below this line
  return arr.some(arr => arr > 0)

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]))