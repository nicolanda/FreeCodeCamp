/*

Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

findLongestWordLength("May the force be with you") should return 5.

findLongestWordLength("Google do a barrel roll") should return 6.

findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

function findLongestWordLength(str) {
  var arrayString = str.split(" ");
  //console.log(arrayString);
  var lgstWord = 0;
  var whWord = " ";
    for(let i = 0; i < arrayString.length; i++){
        if(arrayString[i].length > lgstWord ){
            lgstWord = arrayString[i].length
            whWord = arrayString[i]
        }
    }
    let comp = "In the sentence: "+str+".\nThe longest word is \""+whWord+"\" whith \""+lgstWord+"\" Characteres."
  return comp;
}

let a = "The quick brown fox jumped over the lazy dog"
let b = "May the force be with you";
//findLongestWordLength(a);

console.log(findLongestWordLength(b));
