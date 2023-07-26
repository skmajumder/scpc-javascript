/**
 * * Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */

function romanToInteger(roman = "") {
  const romanNumeral = roman.toUpperCase();
  let result = 0;

  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentRomanNumeral = romanNumeral.charAt(i);
    const nextRomanNumeral = romanNumeral.charAt(i + 1);

    const currentValue = romanMap.get(currentRomanNumeral);
    const nextValue = romanMap.get(nextRomanNumeral);

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
}

const roman = "XXI";
const result = romanToInteger(roman);

console.log(`Roman '${roman}' integer form is: ${result}`);
