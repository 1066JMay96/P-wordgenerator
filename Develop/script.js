// Assignment Code
alert("Hello this is a Password generator. please enter the length you would like to make your password.")
var length = prompt(" The password you choose can be between 8-128.")
var special = confirm ("Would you like special characters?i.e.!#$")
var numeric = confirm("Would you like numeric characters? i.e.!1 2 3")
var lower = confirm ("Would you like to use lower case characters?")
var upper= confirm("Would you like to use upper case characters?")
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
