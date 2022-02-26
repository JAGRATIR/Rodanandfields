

var show = true;

function showproduct() {
    event.preventDefault();
    var checktick = 
        document.querySelector("#productlist");

    if (show) {
        checktick.style.display = "block";
        
        show = false;
    } else {
        checktick.style.display = "none";
        show = true;
    }
}

function skinconcern() {
    event.preventDefault();
    var checktick = 
        document.getElementById("skinlist");

    if (show) {
        checktick.style.display = "block";
        
        show = false;
    } else {
        checktick.style.display = "none";
        show = true;
    }
}
function applicationarea() {
    event.preventDefault();
    var checktick = 
        document.getElementById("applicationarea");

    if (show) {
        checktick.style.display = "block";
        
        show = false;
    } else {
        checktick.style.display = "none";
        show = true;
    }
}
function productline() {
    event.preventDefault();
    var checktick = 
        document.getElementById("productlinelist");

    if (show) {
        checktick.style.display = "block";
        
        show = false;
    } else {
        checktick.style.display = "none";
        show = true;
    }
}

var prodArr=JSON.parse(localStorage.getItem("allProducts"))
    var cartArr=JSON.parse(localStorage.getItem("cartList"))||[]

    let filteredProducts = prodArr;

const populateProducts = () => {
    // console.log('here')cx
    document.querySelector("#productarray").innerHTML = ''

    filteredProducts.map(function(elem){
    var mainDiv=document.createElement("div");
    var childDiv=document.createElement("div");
    var rewDiv=document.createElement("div");
    //img section
    var image=document.createElement("img")
    image.setAttribute("src",elem.img)
    //discription
    var name=document.createElement("p")
    name.innerText=elem.name;
    name.id="elemname"
    var price=document.createElement("p")
    price.innerText="$"+(elem.price);
    
    var title=document.createElement("p")
    title.innerText=elem.title;
    title.id="elemtitle"
    var disc=document.createElement("p")
    disc.innerText=elem.disc;
    disc.id="elemdisc"

    // var qty=document.createElement("p")
    // qty.innerText=elem.qty;
    // qty.id="elemqty"

  //star section
    var star=document.createElement("p")
    star.innerText=elem.star;
    star.id="elemstar"

    var review=document.createElement("p")
    review.innerText=elem.review;
    review.id="elemreview"

    var pearks=document.createElement("p")
    pearks.innerText=elem.pearks;
    pearks.id="elemrpearks"

    var pvalue=document.createElement("p")
    pvalue.innerText=elem.pvalue;
    pvalue.id="elempvalue"


     rewDiv.append(star,review)
     rewDiv.id="rewDiv"
    childDiv.append(title,name,disc,price)
    childDiv.id="childdiv"
    
   var button=document.createElement("button")
   button.innerText="ADD TO BAG";
   button.id="ADDTOBAG"
   button.addEventListener("click",function(){
       addtocart(elem)
   })
   //maindiv
    mainDiv.append(image,childDiv,rewDiv,button)
    mainDiv.id="mainDiv"
    document.querySelector("#productarray").append(mainDiv)
    
    
})
}

function addtocart(elem){

  if(cartArr.length==0){
    cartArr.push(elem)
    localStorage.setItem("cartList",JSON.stringify(cartArr))
    display_data(cartArr);
    show_total1();
  }else{
    var check = check_already_existing(elem);
    if(check==0){
      cartArr.push(elem)
      localStorage.setItem("cartList",JSON.stringify(cartArr))
      display_data(cartArr);
      show_total1();
    }
  } 
  
}


function check_already_existing(elem){
  for(var i=0;i<cartArr.length;i++){
    if(cartArr[i].name==elem.name){
      cartArr[i].qty++;
      localStorage.setItem("cartList",JSON.stringify(cartArr));
      display_data(cartArr);
      show_total1();
      return 1;
    }
  }
  return 0;
}

function show_total1(){
  var total = cartArr.reduce(function(acc,elem){
      return acc+(elem.price*elem.qty);
  },0);

  var total_price = document.querySelector(".price_total>h3:nth-child(2)");

  total_price.innerText="$"+total;
}


populateProducts()
let activeFilters = [];
const myfunction = (filter) =>{
    activeFilters = activeFilters.includes(filter) ? activeFilters.filter(f => f!== filter) : [...activeFilters, filter];

    if(activeFilters.length === 0){
        filteredProducts = prodArr;
    } else {
        filteredProducts = prodArr.filter(prod =>{
           
             for (let a of activeFilters) {
                 
                if (prod.name.toLowerCase().includes(a.toLowerCase())) {
                  
                    return true;}
                    if (prod.disc.toLowerCase().includes(a.toLowerCase())) {
                  
                        return true;}
                        if (prod.img.toLowerCase().includes(a.toLowerCase())) {
                  
                            return true;}

            }
         
            return false;
        });
    }
    populateProducts();
   }
 
   // scroll to top button 
var mybutton = document.querySelector(".scroll-up-btn");
mybutton.addEventListener("click",topFunction);
// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// sticky navbar 
var lastScrollTop = 0;
var navbar = document.querySelector("nav");
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        navbar.style.top="-140px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop=scrollTop;
})

// signin form toggle 

var signin_btn = document.querySelector(".links>.sign_in");

signin_btn.addEventListener("click",toggle_form);


function toggle_form(){
  var form = document.querySelector(".signInForm");
  form.classList.toggle("hide");
}


// search box 
var search_btn = document.querySelectorAll(".search");
var cart_btn = document.querySelectorAll(".cart");

for(var i=0;i<search_btn.length;i++){
  search_btn[i].addEventListener("click",toggle_search);
  cart_btn[i].addEventListener("click",toggle_cart);

}
var close = document.querySelector(".search_bar_area > .search_container > input + span");
close.addEventListener("click",closeSearch);

function toggle_search(){
  var search_box = document.querySelector(".search_bar_area");
  var overlay = document.querySelector("#overlay");
  search_box.classList.remove("hide");
  overlay.classList.add("body__overlay");
  document.body.classList.add("no_scroll");
}

function closeSearch(){
  var search_box = document.querySelector(".search_bar_area");
  var overlay = document.querySelector("#overlay");
  search_box.classList.add("hide");
  overlay.classList.remove("body__overlay");
  document.body.classList.remove("no_scroll");
}


var close_cart_btn= document.querySelector(".cart_area > .cart_box > .cart_nav>p");
close_cart_btn.addEventListener("click",close_cart);

function toggle_cart(){
  var cart_area = document.querySelector(".cart_area");
  cart_area.classList.add("cart_active");
  overlay.classList.add("body__overlay");
  document.body.classList.add("no_scroll");
}

function close_cart(){
  var cart_area = document.querySelector(".cart_area");
  cart_area.classList.remove("cart_active");
  overlay.classList.remove("body__overlay");
  document.body.classList.remove("no_scroll");

}


// for mobile navbar 
var ham_btn = document.querySelector(".ham_menu");
ham_btn.addEventListener("click",toggle_navmenu);

var close_ham= document.querySelector(".nav_top>div:nth-child(2)");
close_ham.addEventListener("click",function(){
  var menu = document.querySelector(".mobile_menu");
  menu.classList.remove("menu_active");
  document.body.classList.remove("no_scroll");
})

function toggle_navmenu(){
  var menu = document.querySelector(".mobile_menu");
  menu.classList.add("menu_active");
  document.body.classList.add("no_scroll");
}


var start_shop_btn = document.querySelector(".cart_mid>button");
start_shop_btn.addEventListener("click",redirect_to_allProducts);

function redirect_to_allProducts(){
  window.location.href="../product.html";
}