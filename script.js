// Assignment Code
let generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
 let special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
let lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
let upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Write password to the #password input
function generatePassword() {
 // Users PW Options
  const pwLength = window.prompt("How many characters would you like your password to be?")
  if(pwLength < 8 || pwLength > 128) {
    alert('Please select valid character length!');
  }else {
    let upper = confirm('Would you like to use Uppercase characters?');
    let lower = confirm('Would you like to use Lowercase characters?');
    let numeric = confirm('Would you like to use numeric characters?');
    let special = confirm('Would you like to use special characters?');
  }

  let allChars ='';
// all available  characters 
  if (upper) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lower) {
    allChars += "abcdefghijklmnopqurstuvwxyz";
  }

  if (numeric) {
    allChars += "0123456789";
  }

  if (special) {
    allChars += "@%+\\/!#$^?:,)(}{][~-_.";
  }
  console.log('allChars:', allChars)

let outputString ="";
for (let i = 0; i < pwLength; i++) {
  outputString += allChars.charAt(Math.floor(Math.random() * allChars.length));
  console.log(outputString);
}

return outputString;

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
