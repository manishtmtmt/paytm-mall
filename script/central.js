// var rangeslider= document.getElementById("slider");
    // var output= document.getElementById("minvalue");
    // output.innerHTML=rangeslider.value;

    // rangeslider.oninput=function(){
    //     output.innerHTML=this.value;
    // }

    var giftCards = [
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 10000,
            discount: 8700,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 5000,
            discount: 4350,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 4000,
            discount: 3600,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 3000,
            discount: 2700,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 2500,
            discount: 2250,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 2000,
            discount: 1800,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 1500,
            discount: 1300,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 1000,
            discount: 900,
            cashback: "with cashback",
        },
        {
            image_url:
            "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAQCQWIK861793A7D2F5F9/0.png?imwidth=282&impolicy=hq",
            name: "Central Gift Card",
            price: 500,
            discount: 450,
            cashback: "with cashback",
        }
    ]

    var cartData = JSON.parse(localStorage.getItem("cart")) || [];
    
    window.addEventListener("load", function () {
        filterByprice(giftCards);
    });
    
    window.addEventListener("load", function () {
      displayData(giftCards);
    });
    
function sortByCategory() {
      var selected = document.querySelector("#selection").value;
      console.log(selected);

      if (selected == "popular") {
        giftCards.sort(function (a, b) {
          if (a.discount > b.discount) return 1;
          if (a.discount < b.discount) return -1;
          return 0;
        });

        console.log(giftCards);
        displayData(giftCards);
      }

      if (selected == "new") {
        giftCards.sort(function (a, b) {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
        console.log(giftCards);
        displayData(giftCards);
      }
    
      if (selected == "htl") {
        giftCards.sort(function (a, b) {
          return b.price - a.price;
        });
        displayData(giftCards);
      
    }
      if (selected == "lth") {
        giftCards.sort(function (a, b) {
          return a.price - b.price;
        });
        displayData(giftCards);
      }

}
var count=giftCards.length;
    document.querySelector(".productcount").append(count);
    document.querySelector(".h1span").append("-"+" "+ count +" " + "Products");
    
    
function displayData(giftCards) {
    document.querySelector("#product").innerHTML = "";
    giftCards.map(function (elem){
        var box = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("class", "image");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.setAttribute("id", "pname");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.setAttribute("id", "originalPrice");
    price.innerText = "₹"+ elem.price;
    

    var discount = document.createElement("p");
    discount.setAttribute("id", "discountPrice");
    discount.innerText ="Buy for ₹"+elem.discount;

    var cashback = document.createElement("p");
    cashback.setAttribute("id", "givencashback");
    cashback.innerText =elem.cashback;

    box.append(img, name, price, discount,cashback);
    box.addEventListener("click", function(){
        addToCart(elem);
     
    var checking= document.querySelector("#minvalue").value;
      if(price >= checking && price <= checking){
        return 1;
      } 
      displayData(giftCards);   
    
    // function filterByprice(){
    //   var checking= document.querySelector("#minvalue").value;

    //   if(price >= checking){
    //     displayData(giftCards);
    //   } 
    // }

});

    document.querySelector("#product").append(box);

    });
    
}
    
function addToCart(elem) {
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.href = "cart.html";
    alert("Item added to cart"); 
  }
    