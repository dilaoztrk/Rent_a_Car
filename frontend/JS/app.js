const container = document.querySelector(".vehicle-list");

// 🔥 veriyi al
let cars = JSON.parse(localStorage.getItem("cars")) || [];

// 🔥 sadece müsait araçlar
let availableCars = cars.filter((c) => c.durum === "Müsait");

// 🔥 ilk render
renderCars(availableCars);

function renderCars(list) {
  container.innerHTML = "";

  list.forEach((car) => {
    container.innerHTML += `
      <div class="card">
        <img src="${car.image}" alt="${car.brand}" />

        <div class="card-body">
          <h3>${car.brand}</h3>

          <p>${car.year} • ${car.fuel} • ${car.gear}</p>

          <div class="price">₺${car.price} / gün</div>

          <!-- 🔥 DURUM GÖSTER -->
          ${
            car.durum !== "Müsait"
              ? `<span style="background:red;color:white;padding:5px;border-radius:6px;">${car.durum}</span>`
              : ""
          }

          <button onclick="goDetail(${car.id})" class="detail-btn">
            Detayları Gör
          </button>
        </div>
      </div>
    `;
  });
}

// 🔥 detay sayfasına git
function goDetail(id) {
  window.location.href = "vehicle.html?id=" + id;
}

// 🔍 FİLTRELEME
document.getElementById("filterBtn").addEventListener("click", () => {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const fuel = document.getElementById("fuelFilter").value;
  const gear = document.getElementById("gearFilter").value;

  const filtered = cars.filter((car) => {
    return (
      car.durum === "Müsait" && // 🔥 önemli
      car.brand.toLowerCase().includes(search) &&
      (fuel === "" || car.fuel === fuel) &&
      (gear === "" || car.gear === gear)
    );
  });

  renderCars(filtered);
});

// 🔍 canlı arama
document.getElementById("searchInput").addEventListener("input", () => {
  document.getElementById("filterBtn").click();
});
