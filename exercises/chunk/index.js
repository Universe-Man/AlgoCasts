// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {}

// MY FIRST SOLUTION (thought I had it but I failed)
function chunk(array, size) {
  let length = array.length;
  let calc = length/size;
  let numberOfSubArrays = Math.ceil(calc);
  let newArray = [];
  let newSubArray = [];
  for (let i = 1; i <= numberOfSubArrays; i++) {
    for (let i = 0; i <= size - 1; i++) {
      newSubArray.push(array[i]);
    }
    newArray.push(newSubArray);
  }
  return newArray;
}


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
