const container = document.getElementById("productContainer");

// Load products ONLY from localStorage
let products = JSON.parse(localStorage.getItem("products"));

// If no products exist yet, create defaults ONCE
if (!products || products.length === 0) {
  products = [
    { name: "Desktop Computer", price: 25000, image: "images/desktop.jpg" },
    { name: "Laptop (Refurbished)", price: 35000, image: "images/laptop.jpg" },
    { name: "SSD 512GB", price: 3500, image: "images/ssd.jpg" },
    { name: "RAM 8GB DDR4", price: 2200, image: "images/ram.jpg" },
    { name: "Keyboard & Mouse Combo", price: 700, image: "images/keyboard-mouse.jpg" },
    { name: "Windows Installation", price: 800, image: "images/windows.jpg" }
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

// Render products
container.innerHTML = "";
products.forEach(p => {
  container.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" onclick="openModal(this)">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">
        Add to Cart
      </button>
    </div>
  `;
});
