// STEP AND PROCESS TO GET APPLICATION TO OPERATE/FUNCTION

// On click of Generate Password button

// 1. Prompt user "How many characters would you like your password to contain" (A number => 8 <= 128 or false)

// 2. Confirm with user to include the use of special characters (if true include use of these special characters at random !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~) or if false do not include)

// 3. Confirm with user to include use of numeric characters (if true include use of these numbers at random 0123456789 or if false do not include)

// 3. Confirm with user to include the use of lowercase letters (if true include use of lowercase letters at random abcdefghijklmnopqrstuvwxyz or if false do not include)

// 4. Confirm with user to include the use of uppercase letters (if true include use of uppercase letters at random ABCDEFGHIJKLMNOPQRSTUVWXYZ or if false do not include)

//----> Finished customized random password is then displayed in textarea 

// HTML ELEMENTS TO BE MANIPULATED BY JS:  #password-section, #generate-button

// DOM VARIABLES
var passwordSection_TextArea = document.querySelector("#password-section");
var generatePassword_Button = document.querySelector("#generate-button");

// Defined variables for password options/characters
var specialChar = "~!@#$%^&*(){};:<>/?=+";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";

// Event on-click function to prompt user password length
generatePassword_Button.addEventListener("click", function (Event) {
    event.preventDefault();
    var promptPasswordLength = prompt("How many characters would you like your password to contain? (must be a between 8 and 128 characters)");
    var confirmSpecialChar = confirm("Would you like to include special characters? (~!@#$%^&*(){};:<>/?=+)");
    var confirmLowerChar = confirm("Would you like to include lower case letters?");
    var confirmUpperChar = confirm("Would you like to include upper case letters?");
    var confirmNumberChar = confirm("Would you like to include numbers?");

    console.log(confirmSpecialChar);
    console.log(confirmLowerChar);
    console.log(confirmUpperChar);
    console.log(confirmNumberChar);

});
