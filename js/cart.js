let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();
function openModal(img) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImage").src = img.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

