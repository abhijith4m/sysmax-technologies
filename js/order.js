let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsDiv = document.getElementById("cartItems");
let totalDiv = document.getElementById("total");

let total = 0;
let productList = "";

cart.forEach(item => {
  let p = document.createElement("p");
  p.innerText = item.name + " - ₹" + item.price;
  cartItemsDiv.appendChild(p);
  total += item.price;
  productList += item.name + " (₹" + item.price + "), ";
});

totalDiv.innerText = "Total Amount: ₹" + total;

function placeOrder() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let address = document.getElementById("address").value;

  fetch("https://script.google.com/macros/s/AKfycby8G0zdLQ2rg6AbG8YUJVByQaFCVPp97Xxe8-4wxQu_UU4Gy-oEVlZ64VYOLLpczlzw6w/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      mobile: mobile,
      address: address,
      products: productList,
      total: total
    })
  })
  .then(() => {
    let message = `Order from SysMax Technologies%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Address: ${address}%0A
Products: ${productList}%0A
Total: ₹${total}`;

    window.open(
      `https://wa.me/918281860472?text=${message}`,
      "_blank"
    );

    localStorage.removeItem("cart");
    alert("Order placed successfully!");
  });
}
