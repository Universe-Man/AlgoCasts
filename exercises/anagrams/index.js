// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const wordA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const wordB = stringB.replace(/[^\w]/g, "").toLowerCase();
  let objA = {};
  let objB = {};
  // if (wordA.length !== wordB.length) {
    // return false;
  // } else {
  for (letter of wordA) {
    if (Object.keys(objA).includes(letter)) {
      objA[letter]++;
    } else {
      objA[letter] = 1;
    }
    // }
  }
  for (letter of wordB) {
    if (Object.keys(objB).includes(letter)) {
      objB[letter]++;
    } else {
      objB[letter] = 1;
    }
  }
  // console.log("AAAA", objA);
  // console.log("BBBB", objB);
  Boolean();
}

module.exports = anagrams;
