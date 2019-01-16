// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// SOLUTION #1 (ITERATIVE, HELPER METHOD)
// function vowels(str) {
//   let count = 0;
//   const checker = "aeiou";
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// SOLUTION #2 (REGEX =>[REGULAR EXPRESSION])
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// MY FIRST SOLUTION (NAILED IT!!)
function vowels(str) {
  let array = str.toLowerCase().split('');
  let count = 0;
  console.log(array);
  for (let char of array) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++
    }
  }
  return count;
}

module.exports = vowels;
