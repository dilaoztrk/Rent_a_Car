const form = document.getElementById("carForm");
const listContainer = document.getElementById("adminCarList");

// 🔥 KAYDET
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newCar = {
    id: Date.now(),

    brand:
      document.getElementById("brand").value +
      " " +
      document.getElementById("model").value,

    year: document.getElementById("year").value,
    fuel: document.getElementById("fuel").value,
    gear: document.getElementById("gear").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    aciklama: document.getElementById("desc").value,

    klima: true,
    bluetooth: true,
    navigasyon: true,
    cocuk_koltugu: false,
    geri_gorus_kamera: true,
    airbag_sayisi: 4,
    durum: "Müsait",
  };

  let cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.push(newCar);
  localStorage.setItem("cars", JSON.stringify(cars));

  form.reset();
  renderAdminCars();
});

// 🔥 LİSTELE
function renderAdminCars() {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];

  listContainer.innerHTML = "";

  cars.forEach((car) => {
    listContainer.innerHTML += `
      <div class="card">
        <img src="${car.image}" />
        <div class="card-body">
          <h3>${car.brand}</h3>
          <p>${car.year} • ${car.fuel} • ${car.gear}</p>
          <div class="price">₺${car.price}</div>

          <button onclick="deleteCar(${car.id})" style="background:red;color:white;">
            Sil
          </button>

          <button onclick="editCar(${car.id})">
            Düzenle
          </button>
          <p>Durum: ${car.durum}</p>

<button onclick="toggleStatus(${car.id})">
  ${car.durum === "Müsait" ? "Bakımda Yap" : "Müsait Yap"}
</button>
        </div>
      </div>
    `;
  });
}

// 🔥 SİL
function deleteCar(id) {
  let cars = JSON.parse(localStorage.getItem("cars")) || [];

  cars = cars.filter((c) => c.id !== id);

  localStorage.setItem("cars", JSON.stringify(cars));

  renderAdminCars();
}

// 🔥 DÜZENLE
function editCar(id) {
  let cars = JSON.parse(localStorage.getItem("cars")) || [];
  const car = cars.find((c) => c.id === id);

  document.getElementById("brand").value = car.brand.split(" ")[0];
  document.getElementById("model").value = car.brand.split(" ")[1];
  document.getElementById("year").value = car.year;
  document.getElementById("fuel").value = car.fuel;
  document.getElementById("gear").value = car.gear;
  document.getElementById("price").value = car.price;
  document.getElementById("image").value = car.image;
  document.getElementById("desc").value = car.aciklama;

  // eskiyi sil
  deleteCar(id);
}

// 🔥 SAYFA AÇILINCA ÇALIŞSIN
renderAdminCars();
function toggleStatus(id) {
  let cars = JSON.parse(localStorage.getItem("cars")) || [];

  const car = cars.find((c) => c.id === id);
  if (!car) return;

  // 🔥 bakım toggle
  car.durum = car.durum === "Müsait" ? "Bakımda" : "Müsait";

  localStorage.setItem("cars", JSON.stringify(cars));

  renderAdminCars();
}
function renderReservations() {
  const list = document.getElementById("reservationList");
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  if (reservations.length === 0) {
    list.innerHTML = "<p>Henüz rezervasyon yok</p>";
    return;
  }

  list.innerHTML = reservations
    .map(
      (r) => `
    <div class="card">
      <div class="card-body">
        <h3>${r.carName}</h3>
        <p>Başlangıç: ${r.startDate}</p>
        <p>Bitiş: ${r.endDate}</p>

        <button onclick="cancelReservation(${r.id})">
          İptal Et
        </button>
      </div>
    </div>
  `,
    )
    .join("");
}
function cancelReservation(id) {
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  const reservation = reservations.find((r) => r.id === id);

  // rezervasyonu sil
  reservations = reservations.filter((r) => r.id !== id);
  localStorage.setItem("reservations", JSON.stringify(reservations));

  // 🔥 araç tekrar müsait olsun
  let cars = JSON.parse(localStorage.getItem("cars")) || [];

  const car = cars.find((c) => c.id === reservation.carId);
  if (car) {
    car.durum = "Müsait";
  }

  localStorage.setItem("cars", JSON.stringify(cars));

  alert("Rezervasyon iptal edildi");

  renderReservations();
  renderAdminCars(); // varsa araç listeni de güncelle
}
renderReservations();
