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

// SOLUTION #1 (I WROTE THIS CODE FROM HIS DIAGRAM) [FAILED, BUT MAYBE ALMOST?]
function steps(n) {
  for (let r = 0; r <= n; r++) {
    let stair = "";
    for (let c = 0; c <= n; c++) {
      if (c <= r) {
        stair.concat("#");
      } else {
        stair.concat(" ");
      }
    }
    console.log(stair);
  }
}

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
