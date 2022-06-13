// Assignment code here
var params = {
  lowercase: "",
  uppercase: "",
  numbers: "",
  special: ""
};
var allChar = null;
var passLength = 0;

function generatePassword () {
  // generate the length
  defineLength();

  // choose paramaters
  promptParameters();

  // shuffle the allChar string  
  function shuffle(allChar) {
    var arr = allChar.split('');
    var n = arr.length;

    for(var i=n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    allChar = arr.join('');
    return allChar;
  }

  // combine selections of parameters
  var allChar = params.lowercase + params.uppercase + params.numbers + params.special;

  // shuffle the string
  allChar = shuffle(allChar);
  
  // limit the password to the selected length
  if(allChar.length > passLength) allChar = allChar.substring(0,passLength);

  // return the randomized password
  return allChar;
}

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
    params.lowercase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  }
  if (!lowerConfirm) {
    params.lowercase = "";
  }

  // prompt for uppercase letters
  var upperConfirm = window.confirm("Would you like to include uppercase letters?");

  // if yes, generate uppercase letters
  if (upperConfirm) {
    params.uppercase = "ABCDEFJHIJKLMNOPQRSTUVWXYZABCDEFJHIJKLMNOPQRSTUVWXYZABCDEFJHIJKLMNOPQRSTUVWXYZABCDEFJHIJKLMNOPQRSTUVWXYZABCDEFJHIJKLMNOPQRSTUVWXYZABCDEFJHIJKLMNOPQRSTUVWXYZ";
  }
  if (!upperConfirm) {
    params.uppercase = "";
  }

  // prompt for numbers
  var numberConfirm = window.confirm("Would you like to include numbers?");

  // if yes, generate numbers
  if (numberConfirm) {
    params.numbers = "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
  }
  if (!numberConfirm) {
    params.numbers = "";
  }

  // prompt for special characters
  var specialConfirm = window.confirm("Would you like to include special characters?");

  // if yes, generate special characters
  if (specialConfirm) {
    params.special = "`~!@#$%^&*()_+';:<,>.?/`~!@#$%^&*()_+';:<,>.?/`~!@#$%^&*()_+';:<,>.?/`~!@#$%^&*()_+';:<,>.?/`~!@#$%^&*()_+';:<,>.?/`~!@#$%^&*()_+';:<,>.?/";
  }
  if (!specialConfirm) {
    params.special = "";
  }
  
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    window.alert("You must choose at least one paramater!");
    promptParameters();
  }

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
