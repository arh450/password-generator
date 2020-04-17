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

// Empty object that will stores users desired types of characters to be used in password
var userChoices = {};

// Event on-click function to prompt user password length, ensures length is at least 8 characters and no more than 128 characters, if password length meets requirements, runs another function called confirmCharacters which is detailed below

generatePassword_Button.addEventListener("click", function () {
    event.preventDefault();
    var promptPasswordLength = parseInt(prompt("How many characters would you like your password to contain? (must be between 8 and 128 characters)"));
    if (promptPasswordLength >= 8 && promptPasswordLength <= 128) {
        confirmCharacters();
    } else if (promptPasswordLength <= 8 || promptPasswordLength >= 128) {
        alert("Note: Password must be at least 8 characters and no longer than 128 characters");
    }
});

// Function that confirms with user what characters they would like to include in their password and stores character into empty object
function confirmCharacters() {
    var confirmSpecialChar = confirm("Would you like to include special characters? (~!@#$%^&*(){};:<>/?=+)");
    var confirmLowerChar = confirm("Would you like to include lower case letters?");
    var confirmUpperChar = confirm("Would you like to include upper case letters?");
    var confirmNumberChar = confirm("Would you like to include numbers?");

    // If statements that take users answers to confirms and add to the empty userChoice object
    if (confirmSpecialChar === true) {
        userChoices["specialChar"] = specialChar;
    }
    if (confirmLowerChar === true) {
        userChoices["lowerChar"] = lowerChar;
    }
    if (confirmUpperChar === true) {
        userChoices["upperChar"] = upperChar;
    }
    if (confirmNumberChar === true) {
        userChoices["numberChar"] = numberChar;
    }
    console.log(userChoices);
};



    // console.log(promptPasswordLength);
    // console.log(confirmSpecialChar);
    // console.log(confirmLowerChar);
    // console.log(confirmUpperChar);
    // console.log(confirmNumberChar);


