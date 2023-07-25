/**
 * * Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
 */

function frequentElement(arr) {
  const frequencyMap = new Map();
  arr.forEach((element) => {
    if (frequencyMap.has(element)) {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  });

  let mostFrequencyElement;
  let maxFrequency = 0;

  frequencyMap.forEach((value, key) => {
    if (value > maxFrequency) {
      maxFrequency = value;
      mostFrequencyElement = key;
    }
  });

  return mostFrequencyElement;
}

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = frequentElement(arr);

console.log(result);
