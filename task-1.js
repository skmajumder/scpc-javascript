/**
 ** Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
 */

function reverseString(input) {
  const clearInput = input.replace(/[^a-zA-Z0-9\s]/g, "");
  let reverseStr = "";

  for (let i = clearInput.length - 1; i >= 0; i--) {
    reverseStr += clearInput.charAt(i);
  }
  return reverseStr;
}

const inputString = "hello world";
const revereString = reverseString(inputString);

console.log(`Original Input: ${inputString}`);
console.log(`Reverse Output: ${revereString}`);
