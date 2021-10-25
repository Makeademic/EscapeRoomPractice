function apples() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Ernest300") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }

function oranges() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "APPLES") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}