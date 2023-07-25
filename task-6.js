/**
 * * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 */

function getRandomChar(string) {
  const randomIndex = Math.trunc(Math.random() * string.length);
  return string.charAt(randomIndex);
}

function shufflePasswordChar(string) {
  const shuffleChar = string.split("").sort(() => 0.5 - Math.random());
  return shuffleChar.join("");
}

function generatesRandomPassword(passwordLength = 6) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = `!@#$%^&*()_+-=[]{}|;:,.<>?/'"`;

  const allChar =
    uppercaseLetters + numbers + lowercaseLetters + specialCharacters;

  let randomPassword = "";

  // * Ensure at least one uppercase letter in password
  randomPassword += getRandomChar(uppercaseLetters);

  // * Ensure at least one lowercase letter in password
  randomPassword += getRandomChar(lowercaseLetters);

  // * Ensure at least one number in password
  randomPassword += getRandomChar(numbers);

  // * Ensure at least one special characters in password
  randomPassword += getRandomChar(specialCharacters);

  for (let i = randomPassword.length; i < passwordLength; i++) {
    const randomIndex = Math.trunc(Math.random() * allChar.length);
    randomPassword += allChar.charAt(randomIndex);
  }

  randomPassword = shufflePasswordChar(randomPassword);
  return randomPassword;
}

const password = generatesRandomPassword(12);
console.log(`Password: ${password}`);
