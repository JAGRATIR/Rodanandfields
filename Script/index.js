bestArr.map(function(elem){
    var div = document.createElement("div");
    var img= document.createElement("img");
    img.setAttribute("src",elem.img);
    var span = document.createElement("span");
    span.innerText=elem.title;
    var h4 = document.createElement("h4");
    h4.innerText= elem.name;

    var p1= document.createElement("p");
    p1.innerText=elem.disc;

    var h3= document.createElement("h3");
    h3.innerText="$"+elem.price;

    var p2= document.createElement("p");
    p2.innerText=elem.star+elem.review;
    p2.className="stars";

    var button = document.createElement("button");
    button.innerText="Add To Bag";
    button.className="btn";

    div.append(img,span,h4,p1,h3,p2,button);
    document.querySelector(".carousel_items").append(div);
})


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


// Carousel scroll on clicking buttons
var left_button = document.querySelector(".carousel>.left_button");
var right_button = document.querySelector(".carousel>.right_button");
var container = document.querySelector('.carousel>.carousel_items');

left_button.addEventListener("click",trigger_left);
right_button.addEventListener("click",trigger_right);

function trigger_left(){
  container.scrollBy({
    top: 0,
    left: -600,
    behavior: 'smooth'
  });
  if(container.scrollLeft<500){
    left_button.style.display="none";
  }

}

function trigger_right(){
  container.scrollBy({
    top: 0,
    left: +600,
    behavior: 'smooth'
  });
  if(container.scrollLeft>500){
    left_button.style.display="block";
  }
}

// 2nd Carousel scroll on clicking buttons
var left_button1 = document.querySelector(".grid_carousel>.left_button");
var right_button1 = document.querySelector(".grid_carousel>.right_button");
var container1 = document.querySelector('.grid_carousel>.grid_carousel_items');

left_button1.addEventListener("click",trigger_left1);
right_button1.addEventListener("click",trigger_right1);

function trigger_left1(){
  container1.scrollBy({
    top: 0,
    left: -720,
    behavior: 'smooth'
  });
  if(container1.scrollLeft<800){
    left_button1.style.display="none";
  }
console.log(container1.scrollLeft)
}

function trigger_right1(){
  container1.scrollBy({
    top: 0,
    left: +720,
    behavior: 'smooth'
  });
  if(container1.scrollLeft<100){
    left_button1.style.display="block";
  }
console.log(container1.scrollLeft)

}


// signin form toggle 

var signin_btn = document.querySelector(".sign_in");

signin_btn.addEventListener("click",toggle_form);


function toggle_form(){
  var form = document.querySelector(".signInForm");
  form.classList.toggle("hide");
}


// search box 
var search_btn = document.querySelector(".search");
search_btn.addEventListener("click",toggle_search);
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


var cart_btn = document.querySelector(".cart");
cart_btn.addEventListener("click",toggle_cart);
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