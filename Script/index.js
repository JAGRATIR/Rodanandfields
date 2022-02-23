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


