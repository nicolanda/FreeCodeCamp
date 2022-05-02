/*

Fill in the body of the add function so it uses currying to add parameters x, y, and z.

add(10)(20)(30) should return 60.

add(1)(2)(3) should return 6.

add(11)(22)(33) should return 66.

Your code should include a final statement that returns x + y + z.

*/

function add(x) {
  // Only change code below this line
  return function(y){
    return function(z){
      return x+z+y;
    }
  }  
  
  // return y => z => x + y + z;

  // Only change code above this line
}

add(10)(20)(30);
console.log(add(10)(20)(30));