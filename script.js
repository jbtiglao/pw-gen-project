// Assignment Code
// Generate button variable
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked the Generate Password button")

var password = "";

// Inputs
var passwordLength;
var uppercase;
var lowercase;
var numbers;
var symbols;

// Password characters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "~", "{", "}", "[", "]", "/", ":", ";", ",", "'"];  


// 1. Prompt the user for the password criteria; 
// a. Password length should be between 8-128 characters

var passwordLength = parseInt(prompt("Please choose password length, between 8 to 128 characters."));

// If user chooses a number equal to or above 8 and equal to or below 128, move to next criteria
if (passwordLength < 8 || passwordLength > 128) {
  return alert("Please choose a number between 8 to 128. Start again!");
}


//When user selects a valid number, user will choose the next criteria
// b. Include uppercase, lowercase, numbers, symbols
var uppercase = confirm("Click OK if you would like to include uppercase letters");
var lowercase = confirm("Click OK if you would like to include lowercase letters");
var numbers = confirm("Click OK if you would like to include numbers");
var symbols = confirm("Click OK if you would like to include symbols or special characters");

if (uppercase === false &&
  lowercase === false &&
  numbers === false &&
  symbols === false) {
  return alert("Please choose at least one character type. Start again!")
}


// 3. Generate password based on criteria
// Function to concat all possible true options 
let passwordArray = []
if (uppercase) {
  passwordArray = passwordArray.concat(upper);
}
if (lowercase) {
  passwordArray = passwordArray.concat(lower);
}
if (numbers) {
  passwordArray = passwordArray.concat(num);
}
if (symbols) {
  passwordArray = passwordArray.concat(sym);
}

console.log(passwordArray)

var password;

// For loop to choose random characters
for (let i = 0; i < passwordLength; i++) {
  var nextChar = passwordArray[Math.floor(Math.random() * passwordArray.length)]
  console.log(password)

  password = password + nextChar;
  
}

// 4. Display the generated pasword on the page
  return (password);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





