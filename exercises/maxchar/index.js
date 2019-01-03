// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  console.log(charMap);

}

// FIRST GO AT IT
// function maxChar(str) {
//   let chars = {};
//   for (let char of str) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }
//   let keys = Object.keys(chars);
//   let values = Object.values(chars);
//
//
// }

module.exports = maxChar;
