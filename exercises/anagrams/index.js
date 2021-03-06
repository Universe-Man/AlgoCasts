// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION #1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
// // USE HELPER FUNCTIONS
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// SOLUTION #2 (CONCENTRATED GOD SOLUTION)
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
// helper function
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// MY FIRST SOLUTION
// function anagrams(stringA, stringB) {
//   const wordA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const wordB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   let objA = {};
//   let objB = {};
//   for (letter of wordA) {
//     if (Object.keys(objA).includes(letter)) {
//       objA[letter]++;
//     } else {
//       objA[letter] = 1;
//     }
//   }
//   for (letter of wordB) {
//     if (Object.keys(objB).includes(letter)) {
//       objB[letter]++;
//     } else {
//       objB[letter] = 1;
//     }
//   }
//   let sortedObjA = {};
//   let sortedObjB = {};
//   /// NEEDED TO SORT THE KEYS (AND VALUES) OF OBJECT [TAKEN FROM STACK OVERFLOW]
//   Object.keys(objA).sort().forEach((key) => {
//     sortedObjA[key] = objA[key];
//   })
//   Object.keys(objB).sort().forEach((key) => {
//     sortedObjB[key] = objB[key];
//   })
//   /////////////////////////////////////
//   // Boolean(sortedObjA == sortedObjB);
//   // if (sortedObjA === sortedObjB) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   // let A = JSON.stringify(sortedObjA);
//   // let B = JSON.stringify(sortedObjB);
//   // Boolean(A === B);
//   // I THOUGHT I WAS REALLY ON TO SOMETHING BUT I JUST CAN'T GET THIS COMPARISON TO WORK. I KNOW IF HAS TO DO WITH THE FACT THAT OBJs REFER TO THE LOCATION OF THE DATA, SO THE 2 OBJECTS, WHILE IDENTICAL, ARE NOT THE SAME.
//   // LAST ATTEMPT AT MERGING KEYS AND VALUES INTO CUSTOM ARRAY
//   /////////////////////////////////////////////////
//   let Akeys = Object.keys(sortedObjA)
//   let Avalues = Object.values(sortedObjA);
//   let Bkeys = Object.keys(sortedObjB)
//   let Bvalues = Object.values(sortedObjB);
//   let A = Akeys + Avalues;
//   let B = Bkeys + Bvalues;
//   console.log("AAAA", A);
//   console.log("BBBB", B);
//   Boolean(A === B);
// }

// THIS WAS PRETTY SHITTY BECAUSE I'M GETTING A TYPEERROR INSISTING THAT OBJECT.VALUES() ISN'T A FUNCTION WHEN INFACT I'M 100% SURE THAT IT IS BECAUSE I'M STARING DIRECTLY AT THE OBJECT.VALUES() MDN PAGE! AND EVEN WHEN I FIBBED IT, IT STILL DIDN'T WORK. SUPER BUMMED BUT IT'S CLEAR I HAVE NO IDEA HOW TO SOLVE THIS. TIME TO JUST GET THE SOLUTION AND MOVE ON, BUT DEFINETLY FRUSTRATED I CAME UP EMPTY HANDED FOR THE MOST PART.

module.exports = anagrams;
