// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SOLUTION #1 (BETTER)
// function capitalize(str) {
//   const words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

// SOLUTION #2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// MY FIRST SOLUTION (NAILED IT!!)
function capitalize(str) {
  const words = str.split(" ");
  let cappedWords = [];
  for (let word of words) {
    let end = word.slice(1)
    let begin = word.slice(0, 1).toUpperCase()
    let capped = begin + end;
    cappedWords.push(capped);
  }
  let final = cappedWords.join(" ");
  return final;
}

module.exports = capitalize;
