/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.

*/



function sumAll(arr) {
  //
  let newArr = [...arr].sort((a,b) => a-b);
  //console.log(newArr[0]);
  let sum = 0;
  
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
    //console.log(sum);
  }
  
  //console.log(sum);
  return sum;
}
console.log(
sumAll([1, 4]),
sumAll([4, 1]),
sumAll([5, 10]),
sumAll([10, 5]),
sumAll([-2, 3])
);