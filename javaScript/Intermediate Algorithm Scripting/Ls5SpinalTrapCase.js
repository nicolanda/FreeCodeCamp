/*

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.

*/

function spinalCase(str) {
  let regex = /\s+|_+/g;
  let newStr;
  let newStr2;
  newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  //console.log(newStr);

  newStr2 = newStr.replace(regex, "-").toLowerCase();

  return newStr2;
}
console.log(
  //spinalCase('This Is Spinal Tap'),
  //spinalCase("thisIsSpinalTap"),
  spinalCase("AllThe-small Things")
);
