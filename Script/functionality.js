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