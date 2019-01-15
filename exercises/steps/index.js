// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ITERATIVE SOLUTIONS FIRST, BEFORE RECURSION SOLUTIONS

// SOLUTION #2 (RECURSION) (make your base case first!!!!)
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
    // return;
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

// SOLUTION #1 (FOLLOWING HIM NOW)
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// SOLUTION #1 (I WROTE THIS CODE FROM HIS DIAGRAM) [FAILED, BUT MAYBE ALMOST?]
// (concat needed to be += and for (<=) needed to be (<))
// function steps(n) {
//   for (let r = 0; r <= n; r++) {
//     let stair = "";
//     for (let c = 0; c <= n; c++) {
//       if (c <= r) {
//         stair.concat("#");
//       } else {
//         stair.concat(" ");
//       }
//     }
//     console.log(stair);
//   }
// }

// MY FIRST SOLUTION (i completely failed at this so i'm just gonna watch the solution)
// function steps(n) {
//   const number = n;
//   while (let i <= number) {
//     for (let i = 0; i <= number; i++) {
//       ?
//     }
//     i++;
//   }
// }

module.exports = steps;
