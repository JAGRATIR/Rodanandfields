var prodArr= JSON.parse(localStorage.getItem("allProducts"))||[];
var search_input = document.querySelector("#search");
search_input.addEventListener("keyup",searchArr);


function displayData(data){
    document.querySelector(".serach_result_container").innerHTML="";
    data.map(function (elem) {
        var mainDiv = document.createElement("div");
    
        var img = document.createElement("img");
        img.setAttribute("src", elem.img);
    
        var name = document.createElement("p");
        name.innerText = elem.name;
    
    
        var price = document.createElement("h2");
        price.innerText = "$"+elem.price;
    
        mainDiv.append(img, name, price);
    
        document.querySelector(".serach_result_container").append(mainDiv);
        mainDiv.addEventListener("click",function(){
            window.location.href="../product.html";
        })
      });
}

document.querySelector(".search_results>a").addEventListener("click",function(){
    window.location.href="../product.html";
})

function searchArr(){
    var search_text= document.querySelector("#search").value.toUpperCase();
    var links= document.querySelector(".search_bar_area > .search_container > .search_links");
    var filterdata = prodArr.filter(function(elem){
        return elem.name.toUpperCase().includes(search_text);
      })

      var total_result = document.querySelector(".search_results");
      var total = document.querySelector(".search_results > p");
      if(search_text==""){
          displayData([]);
          links.style.display="flex";
          total_result.style.display="none";
      }else{
          displayData(filterdata);
          total_result.style.display="flex";
          total.innerText="Showing "+filterdata.length+" of 84 Results";
          links.style.display="none";


      }
     
}