var input1=document.querySelector("#pwwd");
var length=document.querySelector("#length");
var capital=document.querySelector("#capital");
var lower=document.querySelector("#lower");
var number=document.querySelector("#number");
var specialchar=document.querySelector("#specialchar");
console.log("hello");

input1.onfocus = function(){
    document.querySelector("#msg").style.display="flex";
}
input1.onblur =  function(){
    document.querySelector("#msg").style.display="none";
}

input1.addEventListener('keyup', myScript);
function myScript(event){

    event.preventDefault();
    console("hello");
    //upperCase validation
    var upperCase = /[A-Z]/g;
    console.log(input1.value.match(upperCase));

    if(input1.value.match(upperCase))
        { 
                capital.classList.remove("invalid");
                capital.classList.add("valid");
        }
    else
        {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

    //lowerCase validation
    var lowerCase = /[a-z]/g;

    if(input1.value.match(lowerCase))
        {
                lower.classList.remove("invalid");
                lower.classList.add("valid");
        }
    else
        {
            lower.classList.remove("valid");
            lower.classList.add("invalid");
        }
    
    //number validation
    var num = /[0-9]/g;

    if(input1.value.match(num))
        {
                number.classList.remove("invalid");
                number.classList.add("valid");
        }
    else
        {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
    
    //special validation
    var special = /[!$%]/g;

    if(input1.value.match(special))
        {
                specialchar.classList.remove("invalid");
                specialchar.classList.add("valid");
        }
    else
        {
            specialchar.classList.remove("valid");
            specialchar.classList.add("invalid");
        }
    //length

    if(input1.value.length >= 8 && input1.value.length <=64)
        {
                length.classList.remove("invalid");
                length.classList.add("valid");
        }
    else
        {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
}