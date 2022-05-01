var CartData = JSON.parse(localStorage.getItem("cart"));
console.log("cartData");

// var length=cartData.length

// var total=cartData.reduce(function(sum,elem,index,arr){
//     return sum+}

var total = CartData.reduce(function (sum, elem, index, arr) {
  return sum + elem.discount;
}, 0);
document.querySelector("#bb").innerText = total;

var length = CartData.length;
document.querySelector("#bt").innerText = total;
document.querySelector("#ltop").innerText = length + " " + "Item in your bag";
console.log(length);
console.log(total);

console.log(CartData);
displayData(CartData);
var bt = document.getElementById("bt");

function displayData(CartData) {
  CartData.map(function (elem, index) {
    var box = document.createElement("div");
    box.setAttribute("id", "box");

    var div1 = document.createElement("div");

    var div2 = document.createElement("div");

    var div3 = document.createElement("div");

    var div4 = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("class", "image");
    img.src = elem.image_url;

    div1.append(img);

    var name = document.createElement("h3");
    name.setAttribute("id", "pname");
    name.textContent = elem.name;
    div2.append(name);

    var price = document.createElement("s");
    price.setAttribute("id", "originalPrice");
    price.innerText = "₹" + elem.price;
    document.getElementById("bt").append(price);

    var discount = document.createElement("h4");
    discount.setAttribute("id", "discountPrice");
    discount.innerText = elem.discount;

    var cashback = document.createElement("h4");
    cashback.setAttribute("id", "givencashback");
    cashback.innerText = elem.cashback;
    div3.append(discount, price, cashback);

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.width = "100px";
    btn.style.height = "30px";
    btn.style.borderRadius = "5px";
    btn.style.marginBottom = "40px";
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    });

    box.append(div1, div2, btn, div3);
    document.getElementById("left").append(box);
  });
}
function removeItem(elem, index) {
  CartData.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(CartData));
  window.location.reload();
}
