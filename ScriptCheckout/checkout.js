//-----------------Left Portion:contact and payment details-------------
var input1=document.querySelector("#pwwd");
var length=document.querySelector("#length");
var capital=document.querySelector("#capital");
var lower=document.querySelector("#lower");
var number=document.querySelector("#number");
var specialchar=document.querySelector("#specialchar");

//---------------------Contact Portion-----------------
// --------------------Toggle Password------------------
var togglepwd=document.querySelector("#togglepwd");
var pwd=document.querySelector("#pwwd");

togglepwd.addEventListener("click",function(){
    var type=pwd.getAttribute("type")==="password"?"text":"password";
    pwd.setAttribute("type",type);

    //toggle i tag's class(Icon gets toggle)
    
    if(type === "password")
    {
        togglepwd.setAttribute("class","fa fa-eye-slash");
    }
    else{
        togglepwd.setAttribute("class","fa fa-eye");
    }
    
});

input1.onfocus=function(){
    document.querySelector("#msg").style.display="flex";
    document.querySelector("#lower_div > div:first-child").style.height="450px";

} ;
input1.onblur=function(){
    document.querySelector("#msg").style.display="none";
    document.querySelector("#lower_div > div:first-child").style.height="420px";

};

input1.addEventListener('keyup', myScript);
function myScript(event){

    event.preventDefault();
    
    //upperCase validation
    var upperCase = /[A-Z]/g;

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
    
    //special character validation
    var special = /[~`@!#$%^&_:]/g;

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

// -----------------------Sign-in-------------------------

//--------------------Visibilty of next block(shipping and payment) only when "save and continue" button is clicked--------
var arr =  JSON.parse(localStorage.getItem('signindata')) || [];
console.log(typeof (arr));
var form1= document.querySelector("#contact");
form1.addEventListener("submit",check_user);



function check_user(event){
    event.preventDefault();
    var user = form1.mail.value;
    var pwd = form1.pwwd.value;

    var obj={
        user:user,
        pwd:pwd,
    };
    arr.push(obj);
    document.querySelector("#lower_div > div:first-child").style.height="1200px";
    localStorage.setItem(('signindata'),JSON.stringify(arr));  
    console.log(arr);
}


//-----------------Right Portion:Order Summary------------
var cartList=JSON.parse(localStorage.getItem("cartList"));

display(cartList);
displayTotal();

function display(items)
{
    document.querySelector("#container").innerHTML="";
    items.map(function(elem){
        var div1=document.createElement("div");
        div1.className="div1";

        var div2=document.createElement("div");
        var img=document.createElement("img");
        img.setAttribute("src",elem.img);
        div2.className="div2";

        var div3=document.createElement("div");
        div3.className="div3";
        var p1=document.createElement("p");
        p1.innerText=elem.name;
        var p2=document.createElement("p");
        p2.innerText=elem.disc;

        var div4=document.createElement("div");
        div4.className="div4";
        var qty=document.createElement("p");
        qty.innerText="Qty: "+elem.qty;
        var price=document.createElement("p");
        price.innerText="$"+elem.price;

        var hr=document.createElement("hr");

        div4.append(qty,price);
        div3.append(p1,p2,div4);
        div2.append(img);
        div1.append(div2,div3);
        document.querySelector("#container").append(div1,hr);



    });
}

function displayTotal()
{
    var total=cartList.reduce(function(acc,elem){
        return acc+(elem.price*elem.qty);
    },0);

    document.querySelector("#subtotal>p:last-child").innerText="$"+total;
    document.querySelector("#subtotal>p:last-child").value=total;
}

//--------------------Final Total:Added Shipping Charges when one of radio button clicked from "select shipping" block.---------- 

function myscript()
{
    
    var radiog=document.querySelector("input[name='days']:checked").value;
    console.log(radiog);

    var tax=document.querySelector("#tax>p:last-child");

    if(radiog==="$5.95")
    {
        var r1=document.querySelector("#shiptotal>p:last-child");
        r1.innerText="$5.95";
        r1.value="5.95"; 
        
        tax.innerText="$11.45";
        tax.value="11.45";
    }
    else
        if(radiog==="$15.00")
        {
            var r2=document.querySelector("#shiptotal>p:last-child");
            r2.innerText="$15.00";
            r2.value="15.00";   

            tax.innerText="$12.05";
            tax.value="12.05";
        }
        else
            if(radiog==="$25.00")
            {
                var r3=document.querySelector("#shiptotal>p:last-child");
                r3.innerText="$25.00";
                r3.value="25.00"; 
                
                tax.innerText="$13.75";
                tax.value="13.75";
            }
    
    
      var subtotal=+(document.querySelector("#subtotal>p:last-child").value);
    //   console.log("----------subtotal",subtotal);

      var offer=17.50;
    //   console.log("-----------offer",offer);

      var tax=+(document.querySelector("#tax>p:last-child").value);
    //   console.log("----------tax",tax);

      var shiptotal=+(document.querySelector("#shiptotal>p:last-child").value);
    //   console.log("----------shiptotal",shiptotal);
      
      var finalTotal=subtotal+offer+tax+shiptotal;
      document.querySelector("#finalTotal>p:last-child").innerText="$"+finalTotal;
      document.querySelector("#finalTotal>p:last-child").value=finalTotal;

    
    document.querySelector("#lower_div > div:first-child").style.height="2000px";

}




