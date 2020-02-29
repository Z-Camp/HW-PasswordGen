var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "1234657890";
var symbolString = "!@#$%^&*()<>?/.,;[]-=_+|";

// var lowercaseArray = lowercaseString.split("")
// var uppercaseArray = uppercaseString.split("")
// var numericArray = numericString.split("")
// var symbolArray= symbolString.split("")

// console.log(lowercaseArray)
// console.log(uppercaseArray)
// console.log(numericArray)
// console.log(symbolArray)

var button = document.getElementById("button");

function generatePassword() {
  var input = prompt(
    "How long will the password be? (must be between 8 and 128"
  );
  input = parseInt(input);
  if (input < 8 || input > 128 || input == null || typeof(input) != Number) {
    alert("please select a length between 8 and 128");
    generatePassword()
  } else {
    var values = "";
    // "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var lowerBool = confirm("Do you want lower case letters in your password?");
    if (lowerBool === true) {
      values = values + lowercaseString;
      console.log(values);
    }
    var upperBool = confirm("Do you want upper case letters in your password?");
    if (upperBool === true) {
      values = values + uppercaseString;
      console.log(values);
    }
    var numberBool = confirm("Do you want numbers in your password?");

    if (numberBool === true) {
      values = values + numericString;
      console.log(values);
    }
    var symbolBool = confirm("Do you want symbols in your password?");
    if (symbolBool === true) {
      values = values + symbolString;
      console.log(values);
    }
    if (
      lowerBool === false &&
      upperBool === false &&
      numberBool === false &&
      symbolBool === false
    ) {
      alert("you must select OK for at least one option");
      generatePassword();
    }

    var password = "";
    for (var i = 0; i < input; i++) {
      password += values.charAt(Math.floor(Math.random() * values.length));
    }
    console.log(password);
    document.querySelector("#display").setAttribute("placeholder", password);
  }
}

button.addEventListener("click", generatePassword);
