const container = document.getElementById("serviceContainer");

let services = JSON.parse(localStorage.getItem("services"));

if (!services || services.length === 0) {
  services = [
    {
      name: "Laptop & Desktop Repair",
      price: 500,
      desc: "Quick diagnosis and repair for all brands."
    },
    {
      name: "Virus Removal",
      price: 300,
      desc: "Complete malware removal and protection."
    },
    {
      name: "Windows Installation",
      price: 800,
      desc: "OS installation with drivers and updates."
    }
  ];
  localStorage.setItem("services", JSON.stringify(services));
}

container.innerHTML = "";

services.forEach(s => {
  container.innerHTML += `
    <div class="product-card">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <strong>₹${s.price}</strong>
    </div>
  `;
});
