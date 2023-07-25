/**
 * * Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
 */

function findTwoSumIndices(sortedArr, target) {
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (leftIndex < rightIndex) {
    const sum = sortedArr[leftIndex] + sortedArr[rightIndex];

    if (sum === target) {
      // ** find the number pair for target value, then return the index
      return [leftIndex, rightIndex];
    } else if (sum < target) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  // ** Don't find the number pair for target value
  return [];
}

const sortedArr = [1, 3, 6, 8, 11, 15];
const target = 9;

console.log(findTwoSumIndices(sortedArr, target));
