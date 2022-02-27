var form = document.querySelector("#sign_in");
form.addEventListener("submit", sign_in);

var user_data = JSON.parse(localStorage.getItem("signindata")) || [];

function sign_in(e) {
  e.preventDefault();
  var email = form.email.value;
  var password = form.password.value;

  if (email.trim() == "" || password.trim() == "") {
    document.querySelector("#email").style.backgroundColor = "#ff7070";
    document.querySelector("#password").style.backgroundColor = "#ff7070";
    document.querySelector(".user_required").innerText = "Username is required";
    document.querySelector(".pass_required").innerText = "Password is required";
  } else {
        document.querySelector(".user_required").innerText = "";
        document.querySelector(".pass_required").innerText = "";
        document.querySelector("#email").style.backgroundColor = "transparent";
        document.querySelector("#password").style.backgroundColor = "transparent";
        var check = false;
        for (var i = 0; i < user_data.length; i++) {
            if (user_data[i].user == email && user_data[i].pwd == password) {
                check = true;
                break;
            }
        }
        if (check) {
        localStorage.setItem("loggedUser", 1)
        document.querySelector(".pass_required").style.color = "green";
        document.querySelector(".pass_required").innerText ="User logged in successfully";
        location.reload();
        } 
        else {
        localStorage.setItem("loggedUser", 0)
        document.querySelector("#email").style.backgroundColor = "#ff7070";
        document.querySelector("#password").style.backgroundColor = "#ff7070";
        document.querySelector(".pass_required").style.color = "red";
        document.querySelector(".pass_required").innerText = "Wrong Credentials";
        }
    }
}

var loggedUser = localStorage.getItem("loggedUser");
if(loggedUser==1){
         document.querySelector(".signInForm").innerHTML="<span style='font-size:14px;Color:green; padding-right:6px'>User Already signed in</span> <button style='background-color: #000;color: #fff; padding:4px 6px;' onClick=logout()  >Log out</button>";
        
}

function logout(){
    localStorage.setItem("loggedUser", 0)
    location.reload();
}