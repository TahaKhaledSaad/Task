var allProducts = document.querySelectorAll(".container .row .card")
var btn = document.querySelector("#showPrice")
var content = document.querySelector(".content")
var priceSection = document.querySelector(".price-sec")

var totalPrice = 0;
var counter=0;

allProducts.forEach(function (item){
    item.onclick= function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += "<small>Product No</small>" + (counter+=1) + ". "+item.textContent + "<br/>";
        if(content.innerHTML != null){
            btn.style.display= "block"
        }
    }
})

btn.onclick =function(){
    priceSection.innerHTML=totalPrice + "<small> LE</small>"
}


