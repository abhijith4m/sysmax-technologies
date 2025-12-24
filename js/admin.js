
if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

const list = document.getElementById("adminList");
const pname = document.getElementById("pname");
const pprice = document.getElementById("pprice");
const pimage = document.getElementById("pimage");

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
  render();
}

function render() {
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <li>
        ${p.name} – ₹${p.price}
        <button onclick="editProduct(${i})">✏️</button>
        <button onclick="deleteProduct(${i})">❌</button>
      </li>
    `;
  });
}

function saveProduct() {
  const name = pname.value.trim();
  const price = Number(pprice.value);
  const image = pimage.value.trim();

  if (!name || !price || !image) {
    alert("Fill all fields");
    return;
  }

  if (editIndex !== null) {
    // UPDATE existing product
    products[editIndex] = { name, price, image };
    editIndex = null;
  } else {
    // ADD new product
    products.push({ name, price, image });
  }

  pname.value = "";
  pprice.value = "";
  pimage.value = "";

  saveProducts();
}

function editProduct(index) {
  pname.value = products[index].name;
  pprice.value = products[index].price;
  pimage.value = products[index].image;
  editIndex = index;
}

function deleteProduct(index) {
  if (confirm("Delete this product?")) {
    products.splice(index, 1);
    saveProducts();
  }
}

render();
// ===== SERVICES ADMIN =====

let services = JSON.parse(localStorage.getItem("services")) || [];
let editServiceIndex = null;

const sname = document.getElementById("sname");
const sprice = document.getElementById("sprice");
const sdesc = document.getElementById("sdesc");
const serviceList = document.getElementById("serviceList");

function saveServices() {
  localStorage.setItem("services", JSON.stringify(services));
  renderServices();
}

function renderServices() {
  serviceList.innerHTML = "";
  services.forEach((s, i) => {
    serviceList.innerHTML += `
      <li>
        <b>${s.name}</b> – ₹${s.price}
        <button onclick="editService(${i})">✏️</button>
        <button onclick="deleteService(${i})">❌</button>
      </li>
    `;
  });
}

function saveService() {
  const name = sname.value.trim();
  const price = Number(sprice.value);
  const desc = sdesc.value.trim();

  if (!name || !price || !desc) {
    alert("Fill all service fields");
    return;
  }

  if (editServiceIndex !== null) {
    services[editServiceIndex] = { name, price, desc };
    editServiceIndex = null;
  } else {
    services.push({ name, price, desc });
  }

  sname.value = "";
  sprice.value = "";
  sdesc.value = "";

  saveServices();
}

function editService(i) {
  sname.value = services[i].name;
  sprice.value = services[i].price;
  sdesc.value = services[i].desc;
  editServiceIndex = i;
}

function deleteService(i) {
  if (confirm("Delete this service?")) {
    services.splice(i, 1);
    saveServices();
  }
}

renderServices();
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}


