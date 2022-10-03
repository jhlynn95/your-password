var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '<', '>']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var charLength = 8;
var array = [];

var choices = {
  charLength: charLength,
  addUpperCase: false,
  addLowerCase: false,
  addSpecialChar: false,
  addNumbers: false, 
};

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", yourPassword);
// Write password to the #password input
function yourPassword() {
  var okPromts = promts()
  // var password = generatePassword();

}

 function generatePassword() {
  var passwordText = document.querySelector("#password");
  // console.log ('running generate password');
  var password = '';
  for (let i = 0; i < array.length; i++) {
    choices = array[i];

  }
  for(var i = 0; i <= charLength; i++){
    password = password + (Math.floor(Math.random() * choices.charLength)); 
  }
  passwordText.value = password;
}
function promts() {

  var charLength = prompt('Choose how long you would like your password to be, must be between 8-128 characters');
   if (charLength < 8 || charLength > 128) {
   alert('Reminder, Character length must be a number between 8-128');

   promts();
   }
  
  if(confirm("Would you like upper case letters?") == true); {
    choices.addUpperCase = true;
  } 
  if(confirm("Would you like lower case letters?") == true); {
    choices.addLowerCase = true;
  } 
  if(confirm("Would you like special characters?") == true); {
    choices.addSpecialChar = true;
  }
  if(confirm("Would you like numbers?") == true); {
    choices.addNumbers = true;
  }
  
   console.log(choices);
   generatePassword();
// Add event listener to generate button
//  var password = generatePassword();
  // return ;
}
