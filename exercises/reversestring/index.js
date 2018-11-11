// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// MY ANSWER
function reverse(str) {
  return str.split("").reverse().join("")
}

// SOLUTION #1
function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}


module.exports = reverse;
