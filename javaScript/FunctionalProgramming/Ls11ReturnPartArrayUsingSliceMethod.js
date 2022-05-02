/*

Your code should use the slice method.

The inputAnim variable should not change.

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].

*/

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  
  return anim.slice(beginSlice, endSlice);
  
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

console.log(sliceArray(inputAnim, 1, 3));