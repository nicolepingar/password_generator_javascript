// Assignment Code
var generateBtn = document.querySelector("#generate");


// string of each character value 
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
// prompt & confirm for each question/criteria
function generatePassword() {
  var lengthConf = prompt("How many characters would you like your password to be? (8-128 characters).");
 // if user puts an invalid number, alert will appear and then promt will appear again
  while (lengthConf < 8 || lengthConf > 128) {
    alert("Please enter a valid number, passwords must be between 8-128 characters.");
    var lengthConf = prompt("How many characters would you like your password to be? (8-128 characters).");
  }
  var lowerConf = confirm("Would you like your password to include lowercase characters?");
  var upperConf = confirm("Would you like your password to include uppercase characters?");
  var specCharConf = confirm("Would you like your password to include special characters?");
  var numberConf = confirm("Would you like your password to include numbers?");
  // while instead of if because while will continuosly run as long as the condition is not met
  while (lowerConf === false && upperConf === false && specCharConf === false && numberConf === false) {
    alert("You must choose at least one character to be in your password.");
    var lengthConf = prompt("How many characters would you like your password to be?");
    var lowerConf = confirm("Would you like your password to include lowercase characters?");
    var upperConf = confirm("Would you like your password to include uppercase characters?");
    var specCharConf = confirm("Would you like your password to include special characters?");
    var numberConf = confirm("Would you like your password to include numbers?");
  }

  // var is empty
  var passwordCombo = []
  // if user confirms they want lowercase characters, this will add lowerChar to the empty string, passwordCombo  
  if (lowerConf) {
    var passwordCombo = passwordCombo.concat(lowerChar);
  }
  // if user confirms they want uppercase characters, this will add upperChar to passwordCombo and so on  
  if (upperConf) {
    var passwordCombo = passwordCombo.concat(upperChar);
  }
  // if user clicks cancel, idiciating they don't want a certain type of characters, those characters will not be added to passwordCombo
  if (specCharConf) {
    var passwordCombo = passwordCombo.concat(specialChar);
  }
  if (numberConf) {
    var passwordCombo = passwordCombo.concat(numberChar);
  }

  // empty password string 
  var password = ""
  // addition assignment adds chosen random characters together lengthConf amount of times 
  for (var i = 0; i < lengthConf; i++) {
    password = password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];
  }
  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


