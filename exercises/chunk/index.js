// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION #1
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// SOLUTION #2 (BONER SOLUTION)
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// MY ATTEMPT AT SOLUTION #2
// function chunk(array, size) {
//   const chunked = [];
//   const i = 0;
//   while (i < array.length) {
//     let slice = array.slice(i, size - 1)
//     chunked.push(slice);
//     i + size;
//   }
//   return chunked;
// }

// MY FIRST SOLUTION (thought I had it but I failed)
// function chunk(array, size) {
//   let length = array.length;
//   let calc = length/size;
//   let numberOfSubArrays = Math.ceil(calc);
//   let newArray = [];
//   let newSubArray = [];
//   for (let i = 1; i <= numberOfSubArrays; i++) {
//     for (let i = 0; i <= size - 1; i++) {
//       newSubArray.push(array[i]);
//     }
//     newArray.push(newSubArray);
//   }
//   return newArray;
// }
///////////////////////////////////
// let newArr = [];
// for (let i = 0; i <= size; i++) {
//   newArr.push(array[i])
// }
// return newArr;

// array.forEach(
//   () => {
//
//   }
// )

module.exports = chunk;
