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