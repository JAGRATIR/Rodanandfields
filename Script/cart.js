var cartList= JSON.parse(localStorage.getItem("cartList"))||[];


function display_data(data){
    if(cartList.length!=0 || cartArr.length!=0){
        document.querySelector(".cart_mid").style.display="none";
        document.querySelector(".cart_area > .cart_box > .cart_footer").style.display="flex";
        var checkOut= document.querySelector(".cart_footer>.cart_btn")
        checkOut.addEventListener("click",redirect_to_checkOut);

        function redirect_to_checkOut(){
          window.location.href="../reviewbagandchkout.html";
        }
      }

      if(cartList.length<4){
        document.querySelector(".cart_footer").style.position="absolute";
      }else{
        document.querySelector(".cart_footer").style.position="relative";
      }
      document.querySelector(".cart_items").innerHTML="";
    data.map(function(elem){
        var div = document.createElement("div");
        var img= document.createElement("img");
        img.setAttribute("src",elem.img);
        
        var div2=document.createElement("div");
        div2.className="desc";
    
        var h4 = document.createElement("h4");
        h4.innerText= elem.name;
    
        var div3=document.createElement("div");
        div3.className="price";
    
        var qty = document.createElement("h4");
        qty.innerText= "Qty: "+elem.qty;
        var price = document.createElement("h4");
        price.innerText= "$"+elem.price;
    
        div3.append(qty,price);
    
        div2.append(h4,div3);
    
        div.append(img,div2);
        document.querySelector(".cart_items").append(div);
    })
}



function show_total(){
    var total = cartList.reduce(function(acc,elem){
        return acc+(elem.price*elem.qty);
    },0);
  
    var total_price = document.querySelector(".price_total>h3:nth-child(2)");
  
    total_price.innerText="$"+total;
 }

 display_data(cartList);
 show_total();