var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "1234657890";
var symbolString = "!@#$%^&*()<>?/.,;[]-=_+|";
var button = document.getElementById("button");
var copyButton = document.getElementById("copyButton");

function generatePassword() {
  var userInput = prompt(
    "How long will the password be? (must be between 8 and 128"
  );
  userInput = parseInt(userInput);
  console.log(userInput);
  if (
    userInput < 8 ||
    userInput > 128 ||
    userInput == null
    //  || typeof(userInput) != Number
  ) {
    alert("please select a length between 8 and 128");
    generatePassword();
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
    for (var i = 0; i < userInput; i++) {
      password += values.charAt(Math.floor(Math.random() * values.length - 1));
    }
    console.log(password);
    document.querySelector("#display").value = password
  }
}
function copyPassword() {
  document.querySelector("#display").select();
  document.execCommand("Copy");
  alert("copied password to clipboard");
}

button.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
