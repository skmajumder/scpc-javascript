/**
 * * Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 */

function calculator(number1 = 0, number2 = 0, operator = "+") {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Invalid Operator";
  }
}

const number1 = 10;
const number2 = 50;
const operator = "+";

const result = calculator(number1, number2, operator);
console.log("Result:", result);
