// Assignment code here

// length generator
var defineLength = function() {

  passLength = window.prompt("Choose a password length between 8 and 128 characters.");

  parseInt(passLength);

  if (passLength < 8 || passLength > 128) {
    window.alert("That does not fit within the password's paramaters, please choose a number between 8 and 128!");
    
    defineLength();
  }
  else {
    return passLength;
  }
}

var promptParameters = function() {
  // prompt for lowercase letters
  var lowerConfirm = window.confirm("Would you like to include lowercase letters?");
  
  //if yes, generate lowercase letters
  if (lowerConfirm) {
    lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  }

  // prompt for uppercase letters
  var upperConfirm = window.confirm("Would you like to include uppercase letters?");

  // if yes, generate uppercase letters
  if (upperConfirm) {
    upperLetters = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
  }

  // prompt for numbers
  var numberConfirm = window.confirm("Would you like to include numbers?");

  // if yes, generate numbers
  if (numberConfirm) {
    numbers = "0123456789";
  }

  // prompt for special characters
  var specialConfirm = window.confirm("Would you like to include special characters?");

  // if yes, generate special characters
  if (specialConfirm) {
    specialChar = "`~!@#$%^&*()_+';:<,>.?/";
  }
  
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    window.alert("You must choose at least one paramater!");
    promptParameters();
  }
}

var generatePassword = function() {
  // generate the length
  defineLength();

  // choose paramaters
  promptParameters();
  
  console.log(lowerLetters, upperLetters, specialChar, passLength);

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
