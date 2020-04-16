// STEP AND PROCESS TO GET APPLICATION TO OPERATE/FUNCTION

// On click of Generate Password button

// 1. Prompt user "How many characters would you like your password to contain" (A number => 8 <= 128 or false)

// 2. Confirm with user to include the use of special characters (if true include use of these special characters at random !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~) or if false do not include)

// 3. Confirm with user to include use of numeric characters (if true include use of these numbers at random 0123456789 or if false do not include)

// 3. Confirm with user to include the use of lowercase letters (if true include use of lowercase letters at random abcdefghijklmnopqrstuvwxyz or if false do not include)

// 4. Confirm with user to include the use of uppercase letters (if true include use of uppercase letters at random ABCDEFGHIJKLMNOPQRSTUVWXYZ or if false do not include)

//----> Finished customized random password is then displayed in textarea 

// HTML ELEMENTS TO BE MANIPULATED BY JS:  #password-section, #generate-button

// Dedined variables for password options/characters

var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ';', ':', ':', '"', '<', '>', '.', '/', '?', '=', '+'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];