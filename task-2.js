/**
 * * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
 */

function add(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [2, -5, 10, -3, 7];
const result = add(numbers);
console.log(result);
