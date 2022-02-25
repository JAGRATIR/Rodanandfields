var CartList= JSON.parse(localStorage.getItem("CartList"))||[];


function display_data(data){
    if(CartList.length!=0){
        document.querySelector(".cart_mid").style.display="none";
        document.querySelector(".cart_area > .cart_box > .cart_footer").style.display="flex";
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
    var total = CartList.reduce(function(acc,elem){
        return acc+elem.price;
    },0);
  
    var total_price = document.querySelector(".price_total>h3:nth-child(2)");
  
    total_price.innerText="$"+total;
 }

 display_data(CartList);
 show_total();