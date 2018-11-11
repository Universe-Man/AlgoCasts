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

module.exports = reverseInt;
