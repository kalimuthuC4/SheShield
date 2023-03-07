alert("Welcome")

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// signinBtn.onclick = function(){
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.remove("disable");

// }
/* <input onclick="change()" type="button" value="Open Curtain" id="myButton1" /> */

function change();
{
    document.getElementById("signupBtn").value="Sign in";
}
