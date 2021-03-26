// Assignment Code this was at the top
var generateBtn = document.querySelector("#generate");



// Var Arrays
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "_", "=", "+"];
var userinput;

var upperCaseConfirm;
var lowerCaseConfirm;
var specialCharConfirm;
var numbersConfirm;

// Var Arrays

// Below are the prompts function 


function generatePassword() {
  userinput = prompt ("How Many characters would you like your password to contanin? choose between 8 and 28");
  upperCaseConfirm = window.confirm("")

}

function generatePassword() {
  userinput = prompt("How many characters would you like your password to be? Choose between 8 and 128");
  upperCaseConfirm = window.confirm("Would you like to use upper case letters?");
  lowerCaseConfirm = window.confirm("Would you like to use lower case letters?");
  specialCharConfirm = window.confirm("Would you like to use special characters?");
  numbersConfirm = window.confirm("Would you like to use numbers?");
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);