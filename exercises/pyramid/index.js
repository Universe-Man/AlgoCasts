// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// OMG! I TOTALLY NAILED THIS BE MYSELF AFTER A LOT OF THINKING!! HOORAY! (GRANTED I USED HIS LAYOUT AND SOME STUFF FROM THE STEPS SOLUTION, BUT SERIOUSLY I KILLED THIS! WOOT! STOKED!!)
function pyramid(n) {
  let numberOfColumns;
  if (n === 0) {
    numberOfColumns = 0;
  } else if (n === 1) {
    numberOfColumns = 1;
  } else if (n > 1) {
    numberOfColumns = 3;
    let i = 3;
    while (i <= n) {
      numberOfColumns += 2;
      i++;
    }
  }
  let spacesBefore = (numberOfColumns - 1) / 2
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < numberOfColumns; column++) {
      if (column < spacesBefore - row) {
        level += " ";
      } else if (column > spacesBefore + row) {
        level += " ";
      } else {
        level += "#";
      }
    }
    console.log(level);
  }
}

// SOLUTION #1 (ITERATIVE)
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for ( let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// SOLUTION #2 (RECURSION)
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// }

module.exports = pyramid;
