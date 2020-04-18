// DOM VARIABLES
var displayPasswordSection = document.querySelector("#password-section");
var generatePasswordButton = document.querySelector("#generate-button");

// Arrays containing password types/characters
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", ";", ":", "<", ">", "/", "?", "=", "+"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Defined deafault variables before user input
var userCharLength = 0;
var useSpecialChar = false;
var useLowerChar = false;
var useUpperChar = false;
var useNumberChar = false;

// Empty ARRAY that will store users desired types of characters to be used in password
var userChoiceArray = [];

// Empty Array where new password will be stored upon password generation
var newUserPassword = [];

// On click of the "Generate Button" on the users screen a series of prompts/confirms that gather the users desired password character length and desired character type are shown. These outcomes are then concated into an array that contains their selected character types. Finally when password meets requried password character lengths is looped over the number of desired characters and random characters are generated from the concated array for a final new password to be displayed in the textarea on screen.

// On-click event that calls functions described below
generatePasswordButton.addEventListener("click", function () {
    event.preventDefault();
    userInputs();
    generateUserChoiceArray();
    generatePassword();
});

// Prompt and confirms that gets input from user regarding their desired password length and use of specific character types
function userInputs() {
    userCharLength = parseInt(prompt("How many characters would you like your password to contain? (must be between 8 and 128 characters)"));
    useSpecialChar = confirm("Would you like to include special characters? (~!@#$%^&*(){};:<>/?=+)");
    useLowerChar = confirm("Would you like to include lower case letters?");
    useUpperChar = confirm("Would you like to include upper case letters?");
    useNumberChar = confirm("Would you like to include numbers?");

    // console.log(useSpecialChar);
    // console.log(useLowerChar);
    // console.log(userCharLength);
    // console.log(useUpperChar);
    // console.log(useNumberChar);
}

// If statements that when true (to be included into password) concat into one array specific to the users choice
function generateUserChoiceArray() {
    if (useSpecialChar === true) {
        userChoiceArray = userChoiceArray.concat(specialChar);
    }
    if (useLowerChar === true) {
        userChoiceArray = userChoiceArray.concat(lowerChar);
    }
    if (useUpperChar === true) {
        userChoiceArray = userChoiceArray.concat(upperChar);
    }
    if (useNumberChar === true) {
        userChoiceArray = userChoiceArray.concat(numberChar);
    }
}

// Randomizing function that when password meets requried password length loops over users desired password length and generates random charcters from the userChoiceArray and then displays final new password in the textarea on screen
function generatePassword() {
    if (userCharLength < 8 || userCharLength > 128) {
        alert("Note: Password must be at least 8 characters and no longer than 128 characters, please refresh and try again!");
    } else {
        for (i = 0; i < userCharLength; i++) {
            newUserPassword += userChoiceArray[Math.floor(Math.random() * (userChoiceArray.length - 1))];
        }
        displayPasswordSection.textContent = newUserPassword;

        newUserPassword = [];
    }
}



