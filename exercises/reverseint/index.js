// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY ANSWER
function reverseInt(n) {
  let arr = n.toString().split('');
  if (arr[0] === "-") {
    arr.shift();
    arr.reverse();
    arr.unshift("-");
    let str = arr.join('');
    return parseInt(str);
  } else {
    let arr = n.toString().split('').reverse().join('');
    return parseInt(arr);
  }
}

// Math.sign(4000) === 1
// Math.sign(-4000) === -1

// SOLUTION #1 (only one went over, many more solutions)
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   // if (n < 0) {
//   //   return parseInt(reversed) * -1;
//   // }
//   return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
