/**
 * * Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
 */

function secondSmallestNumber(array = []) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (number < smallest) {
      secondSmallest = smallest;
      smallest = number;
    } else if (number < secondSmallest && number === smallest) {
      secondSmallest = number;
    }
  }

  return secondSmallest;
}

const arr = [10, 2, 5, 3, 8, 12, 1, 7];

const result = secondSmallestNumber(arr);
console.log(result);
