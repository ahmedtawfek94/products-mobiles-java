var allProducts = document.querySelectorAll("h5")
var result = document.querySelector("#show")
var myBtn = document.querySelector("#btn")
var myPrice = document.querySelector("#price")
var salary = 0

allProducts.forEach(function(items){
    items.onclick = function(){
        result.innerHTML += items.textContent + "</br>" ;
        result.style.color = "red"
        salary += +(items.getAttribute("price"))
        if(result != ""){
            myBtn.style.display = "block"
        }
    }
})
myBtn.onclick = function(){
    myPrice.innerHTML = salary + "$"
}

