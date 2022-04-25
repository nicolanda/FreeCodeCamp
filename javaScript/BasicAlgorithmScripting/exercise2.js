/*
Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

reverseString("hello") should return a string.

reverseString("hello") should return the string olleh.

reverseString("Howdy") should return the string ydwoH.

reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
*/

function reverseString(str) {
    let reverStr = "";
    for (let i = str.length - 1 ; i >= 0; i--)
        reverStr += str[i];
    return reverStr;
  }
  
  //reverseString("hello");
  console.log(typeof(reverseString("hello")));
  console.log(reverseString("hello"));
  console.log(reverseString("Howdy"));
  console.log(reverseString("Greetings from Earth"));