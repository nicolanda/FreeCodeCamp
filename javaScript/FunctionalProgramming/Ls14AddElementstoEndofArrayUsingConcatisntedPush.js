/*

Your code should use the concat method.

Your code should not use the push method.

The first array should not change.

The second array should not change.

*/


function nonMutatingPush(original, newItem) {
  // Only change code below this line
  //return original.push(newItem);
    return original.concat(newItem);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);