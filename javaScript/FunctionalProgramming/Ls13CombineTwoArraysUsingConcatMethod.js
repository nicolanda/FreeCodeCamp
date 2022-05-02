/*

Your code should use the concat method.

The first array should not change.

The second array should not change.

nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].

*/

function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

console.log(nonMutatingConcat(first, second));