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
var displayPasswordSection_ = document.querySelector("#password-section");
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

// Empty ARRAY that will stores users desired types of characters to be used in password
var userChoiceArray = [];

// Event on-click function to prompt user password length, ensures length is at least 8 characters and no more than 128 characters, if password length meets requirements, runs another function called confirmCharacters which is detailed below

generatePasswordButton.addEventListener("click", function () {
    event.preventDefault();
    userInputs();
    lengthCheck();
    generateUserChoiceArray();

});

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

function lengthCheck() {
    if (userCharLength >= 8 && userCharLength <= 128) {
    } else if (userCharLength <= 8 || userCharLength >= 128) {
        alert("Note: Password must be at least 8 characters and no longer than 128 characters, please refresh and try again");
    }
}

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


























// function producedPassword() {
//     for (var i = 0; i < userCharLength; i++) {
//         var passwordString = "";
//         var passwordChars = Object.keys(userChoices);
//         var randomizedEl = passwordChars[Math.floor(Math.random() * passwordChars.length)]
//         var singleChar = singleRandomChar(userChoices[passwordChars]);

//         passwordString += singleChar;

//         console.log("single random char: ", singleChar);
//         console.log(passwordString, passwordString.length);
//         console.log(userCharLength);


//     }
//     return passwordString
// }

// function singleRandomChar(takesString) {
//     return takesString[Math.floor(Math.random() * takesString.length)]
// }

// producedPassword();




