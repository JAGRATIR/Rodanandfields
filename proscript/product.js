

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
    console.log(prodArr)
    var cartArr=JSON.parse(localStorage.getItem("cartList"))||[]

    let filteredProducts = prodArr;

const populateProducts = (products) => {
    // console.log('here')cx
    document.querySelector("#productarray").innerHTML = ''

    products.map(function(elem){
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
    price.innerText=(elem.price);
    
    var title=document.createElement("p")
    title.innerText=elem.title;
    title.id="elemtitle"
    var disc=document.createElement("p")
    disc.innerText=elem.disc;
    disc.id="elemdisc"

    var qty=document.createElement("p")
    qty.innerText=elem.qty;
    qty.id="elemqty"

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
    childDiv.append(title,name,disc,price,qty)
    childDiv.id="childdiv"
    
   var button=document.createElement("button")
   button.innerText="ADD TO BAG";
   button.id="ADDTOBAG"
   button.addEventListener("click",function(){
       addtocart(elem)
   })
   function addtocart(elem){
       console.log(elem)
       cartArr.push(elem)
       console.log(cartArr)
       localStorage.setItem("cartList",JSON.stringify(cartArr))
   }
   
   //maindiv
    mainDiv.append(image,childDiv,rewDiv,button)
    mainDiv.id="mainDiv"
    document.querySelector("#productarray").append(mainDiv)
    
    
})
}

populateProducts(filteredProducts.slice(0, 10));
if(filteredProducts.length <= 10) {
           
    document.getElementById('showMoreButton').style.display = 'none';
} else {
    document.getElementById('showMoreButton').style.display = 'default';
}
let page = 1;
let activeFilters = [];

const populateProductsWithFilters = () => {
    
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
    if(filteredProducts.length <= page*10) {
        document.getElementById('showMoreButton').style.display = 'none';
    } else {
        document.getElementById('showMoreButton').style.display = 'block';
    }
    populateProducts(filteredProducts.slice(0, 10*page));
}
const myfunction = (filter) =>{
    page = 1;
    activeFilters = activeFilters.includes(filter) ? activeFilters.filter(f => f!== filter) : [...activeFilters, filter];
    populateProductsWithFilters();
   }
 
   const showMore = () => {
       page++;
       console.log('new page:', page, filteredProducts.length, page*10);
       populateProductsWithFilters();
   }
   