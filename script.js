// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
function generatePassword() {
  var lengthConf = prompt("How many characters would you like your password to be?");
  var lowerConf = confirm("Would you like your password to include lowercase characters?");
  var upperConf = confirm("Would you like your password to include uppercase characters?");
  var specCharConf = confirm("Would you like your password to include special characters?");
  var numberConf = confirm("Would you like your password to include numbers?");

  
  while(lowerConf === false && upperConf === false && specCharConf === false && numberConf === false) {
    alert("You must choose at least one character to be in your password.");
    var lengthConf = prompt("How many characters would you like your password to be?");
    var lowerConf = confirm("Would you like your password to include lowercase characters?");
    var upperConf = confirm("Would you like your password to include uppercase characters?");
    var specCharConf = confirm("Would you like your password to include special characters?");
    var numberConf = confirm("Would you like your password to include numbers?");
  }
  
var passwordCombo = []
  
if (lowerConf = true) {
  var passwordCombo = passwordCombo.concat(lowerChar);
}
if (upperConf =  true) {
  var passwordCombo = passwordCombo.concat(upperChar);
}
if (specCharConf = true) {
  var passwordCombo = passwordCombo.concat(specialChar);
}
if (numberConf = true) {
  var passwordCombo = passwordCombo.concat(numberChar);
}



// testing code
console.log(passwordCombo);
console.log(passwordCombo.length);
console.log(Math.random() * passwordCombo.length);
console.log(Math.floor(Math.random() * passwordCombo.length));
console.log(passwordCombo[Math.floor(Math.random() * passwordCombo.length)]);


var password = ""

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



writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


