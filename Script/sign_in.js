var form = document.querySelector("#sign_in");
form.addEventListener("submit",sign_in);


function sign_in(e){
e.preventDefault();
var email= form.email.value;
var password= form.password.value;

if(email.trim()=="" || password.trim()==""){
    document.querySelector("#email").style.backgroundColor="red";
    document.querySelector("#password").style.backgroundColor="red";
    document.querySelector(".user_required").innerText="Username is required";
    document.querySelector(".pass_required").innerText="Password is required";
}else{
    document.querySelector(".user_required").innerText="";
    document.querySelector(".pass_required").innerText="";
    document.querySelector("#email").style.backgroundColor="transparent";
    document.querySelector("#password").style.backgroundColor="transparent";

    if(email=="akshit@mail.com" && password=="12345"){
        document.querySelector(".pass_required").style.color="green";
        document.querySelector(".pass_required").innerText="User logged in successfully";

        
    }else{
        document.querySelector("#email").style.backgroundColor="red";
         document.querySelector("#password").style.backgroundColor="red";
        document.querySelector(".pass_required").style.color="red";
        document.querySelector(".pass_required").innerText="Something went wrong";
    }
}
}